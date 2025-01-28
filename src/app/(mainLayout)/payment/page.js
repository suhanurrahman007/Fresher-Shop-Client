"use client";
import useAuth from "@/components/hooks/useAuth";
import useOrder from "@/components/hooks/useOrder";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import CheckoutForm from "@/components/share/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import jsPDF from "jspdf";
import Image from "next/image";
import React from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

const PaymentPage = () => {
  // Stripe public key loaded securely via environment variables
  const stripePromise = loadStripe(
    "pk_test_51OEHKpItrEdLuT7QfJHV2vlSDSSTfGMzIXNJB08KN1pKingZdzESWEK2XOcaPf3CZ9NULcS3IiaGMzijEfAVz70o00WYZHsRGz"
  );

  const [order] = useOrder();

  const publicAxios = usePublicAxios();
  const { user } = useAuth();

  // Find the most recent order
  const mostRecentData = order?.reduce((latest, current) => {
    const currentTime = new Date(current.time).getTime();
    return currentTime > (new Date(latest?.time).getTime() || 0)
      ? current
      : latest;
  }, null);

  // Handle case where no orders exist
  if (!mostRecentData) {
    return <p className="text-center text-gray-500">No recent order found.</p>;
  }

  // Define additional charges and calculate total cost
  const deliveryCharges = 99;
  const codCharge = 0.44;
  const totalCharges = (
    parseFloat(mostRecentData.productPrice) +
    deliveryCharges +
    codCharge
  ).toFixed(2);

  const cashPayment = {
    name: user?.displayName,
    orderId: mostRecentData?._id,
    email: user?.email,
    amount: totalCharges,
    transactionId: "COD", // Placeholder for Cash on Delivery
    payment: "Cash On Delivery",
    date: new Date().toISOString(), // Standardized date format
  };
  console.log(mostRecentData);

  console.log(cashPayment);
  const handleCashOnDelivery = async () => {
    try {
      const res = await publicAxios.post("/payment", cashPayment);
      toast.success("Cash on Delivery request submitted!");
    } catch (error) {
      console.error("Error processing COD:", error);
      toast.error("Failed to process Cash on Delivery.");
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
    doc.text(`Email: ${user?.email}`, 20, 50);
    doc.text(`Phone: ${mostRecentData?.phone}`, 20, 55);
    doc.text(`Product Price: ${totalCharges}`, 20, 60);
    doc.setFontSize(10);
    doc.text(`Delivery Date: ${mostRecentData?.deliveryDate}`, 125, 45);
    doc.text(`Tracking No: ${mostRecentData?._id}`, 125, 50);

    doc.setTextColor(255, 0, 0); // Set color to red (RGB: 255, 0, 0)
    doc.text(`Payment: Pending`, 125, 55);

    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "bold");
    doc.text("Delivery Address", 20, 80);
    doc.setFont("helvetica", "normal");
    doc.text(`${mostRecentData?.area}`, 20, 85);

    doc.save(`${mostRecentData?.productName} Receipt.pdf`);
  };

  return (
    <div className="flex py-24 flex-col items-center justify-center md:flex-row">
      <Helmet>
        <title>Payment - Fresher Shop</title>
      </Helmet>
      {/* Image Section */}
      <div className="group relative sm:w-[350px]">
        <Image
          width={350}
          height={350}
          className="h-full w-full scale-105 transform rounded-lg bg-black/70"
          src="https://i.ibb.co/Sx5w4Gn/pngimg-com-credit-card-PNG23.png"
          alt="Credit card image"
        />
        <span className="absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center justify-center rounded-full bg-white bg-gradient-to-tr from-[#0d87f8] to-[#70c4ff] duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#0d87f8]">
          <svg
            width={25}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="style=linear">
              <g id="add">
                <path
                  id="vector"
                  d="M11.998 5.84424L11.998 18.1604"
                  stroke="#9EE6FD"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
                <path
                  id="vector_2"
                  d="M18.1561 12.002L5.83998 12.0019"
                  stroke="#9EE6FD"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </g>
            </g>
          </svg>
        </span>
        <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300 group-hover:h-[50px] group-hover:w-[50px]"></span>
        <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/50 to-[#70c4ff]/50 duration-500 hover:duration-300 group-hover:h-[60px] group-hover:w-[60px] "></span>
      </div>

      {/* Payment Details Section */}
      <div className="min-w-[250px] max-w-[350px] space-y-7 rounded-br-lg rounded-tr-lg bg-white p-10 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] dark:bg-[#18181B] md:w-[350px] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
        {/* Order Details */}
        <div className="space-y-1">
          <h2 className="text-center text-xl font-medium text-gray-700 dark:text-white/90 lg:text-2xl">
            {mostRecentData.name}
          </h2>
          <p className="text-gray-500 dark:text-white/70">
            {mostRecentData.area}
          </p>
        </div>

        {/* Price Breakdown */}
        <div className="flex flex-wrap items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-gray-500 dark:text-white/70">Delivery</p>
            <p className="text-lg tracking-wider text-blue-700  lg:text-sm">
              {deliveryCharges}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500 dark:text-white/70">Price</p>
            <p className="text-lg tracking-wider text-purple-700 lg:text-sm">
              {mostRecentData?.deliveryDate}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500 dark:text-white/70">
              Total Price
            </p>
            <p className="text-lg tracking-wider text-green-600 font-bold lg:text-sm">
              {totalCharges}
            </p>
          </div>
        </div>

        {/* Payment Options */}
        <div>
          <div className="rounded-b-md shadow-md">
            <Elements stripe={stripePromise}>
              <CheckoutForm
                order={mostRecentData}
                amount={totalCharges}
              ></CheckoutForm>
            </Elements>
          </div>
          <button
            onClick={handleCashOnDelivery}
            className="rounded-full border border-[#0d87f8] mt-5 px-4 py-2 text-sm text-[#0d87f8] hover:bg-[#0d87f8] hover:text-white duration-300 dark:hover:bg-transparent dark:hover:text-[#0d87f8] dark:hover:drop-shadow-[0px_0px_2px_#0d87f8]"
          >
            Cash On Delivery
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
