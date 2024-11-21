"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { FaSackDollar } from "react-icons/fa6";
import { MdCancelScheduleSend, MdOutlineLockReset, MdResetTv } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaAddressCard } from "react-icons/fa";

export function ServiceToolsCard() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  items-center justify-center w-full gap-4 mx-auto px-8">
        <Card title="Tracking My Order" icon={<TrackingMyOrderIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="My Payment Option" icon={<PaymentIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="My Password Reset" icon={<MyPasswordResetIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card title="My Profile" icon={<MyProfileIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Order Return" icon={<OrderReturnIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="My Address Booking" icon={<MyAddressBookIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card title="My Voucher" icon={<VoucherIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Cancel My Order" icon={<CancelMyOrderIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
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
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
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

const TrackingMyOrderIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      width="66"
      height="65"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white"
    >
      {/* Outer Shape */}
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" />

      {/* Map Marker */}
      <path
        d="M32 16C25.37 16 20 21.37 20 28c0 6.44 12 19.95 12 19.95s12-13.51 12-19.95c0-6.63-5.37-12-12-12Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="32" cy="28" r="4" fill="currentColor" />

      {/* Route Lines */}
      <line
        x1="10"
        y1="54"
        x2="18"
        y2="46"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="46"
        y1="18"
        x2="54"
        y2="10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

const MyPasswordResetIcon = () => {
  return (
    <MdOutlineLockReset className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white " />
  );
};

const MyProfileIcon = () => {
  return (
    <CgProfile className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white " />
  );
};

const PaymentIcon = () => {
  return (
    <FaSackDollar className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white " />
  );
};

const VoucherIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      width="66"
      height="65"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white"
    >
      {/* Outer Shape */}
      <rect
        x="4"
        y="12"
        width="56"
        height="40"
        rx="8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Notch Circles */}
      <circle cx="4" cy="22" r="4" fill="currentColor" />
      <circle cx="4" cy="42" r="4" fill="currentColor" />
      <circle cx="60" cy="22" r="4" fill="currentColor" />
      <circle cx="60" cy="42" r="4" fill="currentColor" />
      {/* Dotted Line */}
      <line
        x1="16"
        y1="32"
        x2="48"
        y2="32"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 2"
      />
    </svg>
  );
};


const OrderReturnIcon = () => {
  return (
    <MdResetTv className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white " />
  );
};

const MyAddressBookIcon = () => {
  return (
    <FaAddressCard className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white " />
  );
};

const CancelMyOrderIcon = () => {
  return (
    <MdCancelScheduleSend className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white " />
  );
};



export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
