"use client";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import usePublicAxios from "../hooks/usePublicAxios";
import toast from "react-hot-toast";
import { jsPDF } from "jspdf";

// import UserPdf from "./pdf";

const CheckoutForm = ({ amount, order, findOrder }) => {
  console.log(order);
  console.log(amount);
  console.log(findOrder);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const doc = new jsPDF();
  const ProductAmount = parseFloat(amount);
  // console.log(ProductAmount);
  const publicAxios = usePublicAxios();
  const { user } = useAuth();

  useEffect(() => {
    publicAxios.post("/create-payment-intent", { amount }).then((res) => {
      // console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [publicAxios, amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);

      setError("");
    }

    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm Error");
    } else {
      console.log(paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log(paymentIntent.id);
        toast.success("Successfully Payment");
        setTransactionId(paymentIntent.id);

        // Payment create based on order parcel _id
        const orderId = order ? order?._id : null;
        const findOrderId = findOrder ? findOrder?._id : null;

        const paymentId = orderId || findOrderId;
        const payment = {
          _id: paymentId,
          name: user?.displayName,
          email: user?.email,
          amount: amount,
          data: new Date(),
          transactionId: paymentIntent?.id,
          payment: "successfully",
        };
        const res = await publicAxios.post("/payment", payment);

        console.log(res.data);
      }
      doc.rect(18, 5, 180, 100);
      doc.setFontSize(8);
      doc.text("Customer copy", 20, 20);
      doc.text(`${new Date().toLocaleDateString()}`, 160, 20);
      doc.text(`${new Date().toLocaleTimeString()}`, 175, 20);
      doc.setFontSize(20);
      doc.text("Quick Ship", 105, 20, null, null, "center");
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

      doc.setFont("helvetica", "bold");
      doc.text("Delivery Address", 20, 80);
      doc.setFont("helvetica", "normal");
      doc.text(`${order?.area || findOrder?.area}`, 20, 85);

      doc.save("Receipt.pdf");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn my-5 btn-outline w-full btn-success"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      <p className="text-red-700 mt-4">{error}</p>
      <p className="text-center">
        {transactionId && (
          <p className="text-green-400 mt-4">{transactionId}</p>
        )}
      </p>
    </div>
  );
};

export default CheckoutForm;
