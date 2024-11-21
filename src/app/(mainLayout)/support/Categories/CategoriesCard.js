"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function CategoriesCard() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center w-full gap-4 mx-auto px-8">
        <Card title="Promotions" icon={<PromotionsIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Account Management" icon={<AccountManagementIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Categories" icon={<CategoriesIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card title="Orders" icon={<OrdersIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Shipping & Delivery" icon={<ShippingIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Payments" icon={<PaymentsIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card title="Returns & Refunds" icon={<ReturnsIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Sell On Shop" icon={<SellOnDarazIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
      </div>
    </>
  );
}

const Card = ({ title, icon, children }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-32"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

// New Icons
const PromotionsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="66"
      height="65"
      viewBox="0 0 64 64"
      fill="none"
      className="h-10 w-10 text-black dark:text-white"
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20 32h24M32 20v24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M40 24l-8 8 8 8M24 40l8-8-8-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
const AccountManagementIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="66"
      height="65"
      viewBox="0 0 64 64"
      fill="none"
      className="h-10 w-10 text-black dark:text-white"
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="26" r="8" stroke="currentColor" strokeWidth="2" />
      <path
        d="M18 46c0-6.627 5.373-12 12-12h4c6.627 0 12 5.373 12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
const CategoriesIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="66"
      height="65"
      viewBox="0 0 64 64"
      fill="none"
      className="h-10 w-10 text-black dark:text-white"
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" />
      <rect
        x="18"
        y="18"
        width="12"
        height="12"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="34"
        y="18"
        width="12"
        height="12"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="18"
        y="34"
        width="12"
        height="12"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="34"
        y="34"
        width="12"
        height="12"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};
const OrdersIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="66"
      height="65"
      viewBox="0 0 64 64"
      fill="none"
      className="h-10 w-10 text-black dark:text-white"
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" />
      <rect
        x="20"
        y="24"
        width="24"
        height="16"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M28 24v-4h8v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 34h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
const ShippingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="66"
      height="65"
      viewBox="0 0 64 64"
      fill="none"
      className="h-10 w-10 text-black dark:text-white"
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20 36h20l8-8v12h-8v4H20v-8zm0 0l-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="26" cy="42" r="3" fill="currentColor" />
      <circle cx="38" cy="42" r="3" fill="currentColor" />
    </svg>
  );
};
const PaymentsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="66"
      height="65"
      viewBox="0 0 64 64"
      fill="none"
      className="h-10 w-10 text-black dark:text-white"
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" />
      <rect
        x="20"
        y="26"
        width="24"
        height="16"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M24 30h8M24 34h16M24 38h12"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};
const ReturnsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="66"
      height="65"
      viewBox="0 0 64 64"
      fill="none"
      className="h-10 w-10 text-black dark:text-white"
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20 24l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 24h12v12H32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
const SellOnDarazIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="66"
      height="65"
      viewBox="0 0 64 64"
      fill="none"
      className="h-10 w-10 text-black dark:text-white"
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" />
      <path
        d="M22 36h20v-8l-8-6h-4l-8 6v8zm4 0v6h12v-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};


export default CategoriesCard;
