"use client";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { jsPDF } from "jspdf";
import useAuth from "../hooks/useAuth";
import usePublicAxios from "../hooks/usePublicAxios";

const CheckoutForm = ({ amount, order, findOrder }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const publicAxios = usePublicAxios();
  const { user } = useAuth();

  useEffect(() => {
    if (amount) {
      publicAxios.post("/create-payment-intent", { amount }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [publicAxios, amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) {
      setError("Stripe has not loaded properly. Please try again.");
      setIsLoading(false);
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      setError("Please enter your card details.");
      setIsLoading(false);
      return;
    }

    const { error: paymentError } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        email: user?.email || "anonymous",
        name: user?.displayName || "anonymous",
      },
    });

    if (paymentError) {
      setError(paymentError.message);
      setIsLoading(false);
      return;
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card },
      });

    if (confirmError) {
      setError("Payment confirmation failed. Please try again.");
      setIsLoading(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      toast.success("Payment successful!");

      // Send payment details to backend
      const payment = {
        _id: order?._id || findOrder?._id,
        name: user?.displayName,
        email: user?.email,
        amount,
        transactionId: paymentIntent.id,
        payment: "successful",
        date: new Date(),
      };

      try {
        await publicAxios.post("/payment", payment);
      } catch (err) {
        console.error("Error saving payment:", err);
      }

      // Generate PDF receipt
      const doc = new jsPDF();
      doc.rect(18, 5, 180, 100);
      doc.setFontSize(8);
      doc.text("Customer copy", 20, 20);
      doc.text(`${new Date().toLocaleDateString()}`, 160, 20);
      doc.text(`${new Date().toLocaleTimeString()}`, 175, 20);
      doc.setFontSize(20);
      doc.text("Fresher Super Market", 105, 20, null, null, "center");
      doc.setFontSize(10);
      doc.text("123 Fake street,New York", 105, 25, null, null, "center");

      doc.setFontSize(12);

      doc.setFont("helvetica", "bold");
      doc.text("Bill To", 20, 40);
      doc.setFont("helvetica", "normal");

      doc.setFontSize(10);
      doc.text(`Name: ${user?.displayName}`, 20, 45);
      doc.text(`Email: ${order?.email || findOrder?.email}`, 20, 50);
      doc.text(`Phone: ${order?.phone || findOrder?.phone}`, 20, 55);
      doc.text(`Product Price: ${amount}`, 20, 60);
      doc.setFontSize(10);
      doc.text(
        `Delivery Date: ${order?.deliveryDate || findOrder?.deliveryDate}`,
        125,
        45
      );
      doc.text(`Tracking No: ${order?._id || findOrder?._id}`, 125, 50);
      doc.setTextColor(0, 128, 0); // Set color to red (RGB: 255, 0, 0)
      doc.text(`Payment: Successful`, 125, 55);

      doc.setTextColor(0, 0, 0);

      doc.setFont("helvetica", "bold");
      doc.text("Delivery Address", 20, 80);
      doc.setFont("helvetica", "normal");
      doc.text(`${order?.area || findOrder?.area}`, 20, 85);

      doc.save(`${order?.productName} Receipt.pdf`);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="group p-3 bg-[#000C21] border border-green-500 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 transition duration-300">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#ffffff", // White text for contrast
                  fontFamily: "'Roboto', sans-serif",
                  fontSmoothing: "antialiased",
                  "::placeholder": {
                    color: "#B0BEC5", // Light gray placeholder
                  },
                },
                invalid: {
                  color: "#fa755a", // Error text color
                  iconColor: "#fa755a", // Error icon color
                },
                complete: {
                  color: "#4caf50", // Success text color
                  iconColor: "#4caf50", // Success icon color
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!stripe || !clientSecret || isLoading}
          className={`text-xl w-full rounded-md mt-4 h-12 text-white bg-sky-800 overflow-hidden relative z-10 group hover:text-sky-900 duration-700 ${
            isLoading && "opacity-50 cursor-not-allowed"
          }`}
        >
          {isLoading ? "Processing..." : "Pay"}
          <span className="bg-sky-900 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-50 size-32 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
          <span className="bg-sky-800 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-100 size-28 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
          <span className="bg-sky-600 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-200 size-24 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
          <span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-300 size-20 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
          <span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-[400ms] size-16 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
        </button>
      </form>
      {error && <p className="text-red-700 mt-4">{error}</p>}
      {transactionId && (
        <p className="text-green-400 mt-4">Transaction ID: {transactionId}</p>
      )}
    </div>
  );
};

export default CheckoutForm;
