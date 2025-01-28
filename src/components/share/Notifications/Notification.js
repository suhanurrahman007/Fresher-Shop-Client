"use client";
import { IoIosNotifications } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import { useState } from "react";
import useOrder from "@/components/hooks/useOrder";
import usePayment from "@/components/hooks/usePayment";
import ThreeDotsModal from "./ThreeDotsModal";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";
import useMyApplications from "@/components/hooks/useMyApplications";
import useAuth from "@/components/hooks/useAuth";

const Notifications = () => {
  const [order] = useOrder();
  const [payment] = usePayment();
  const [myApplications] = useMyApplications();
  const { user } = useAuth();

  const filterApplication = myApplications?.filter(
    (item) => item?.email === user?.email
  );
  console.log(filterApplication)
  const [showAll, setShowAll] = useState(false);
  const [showAllOrder, setShowAllOrder] = useState(false);
  const [showAllPayment, setShowAllPayment] = useState(false);
  const [showAllApplication, setShowAllApplication] = useState(false);

  const formatTimeAgo = (time) => {
    const now = new Date();
    const commentTime = new Date(time);

    const years = differenceInYears(now, commentTime);
    const months = differenceInMonths(now, commentTime);
    const days = differenceInDays(now, commentTime);

    if (years >= 1) {
      return `${years}y`;
    }
    if (months >= 1) {
      return `${months}m`;
    }
    if (days >= 7) {
      return `${Math.floor(days / 7)}w`;
    }
    if (days >= 1) {
      return `${days}d`;
    }
    const minutes = Math.floor((now - commentTime) / 60000); // Get the difference in minutes
    return minutes < 1 ? "Just now" : `${minutes}m`;
  };

  return (
    <div>
      {order?.length === 0 &&
      payment?.length === 0 &&
      filterApplication?.length === 0 ? (
        <div className="drawer drawer-end">
          <input
            id="my-drawer-4"
            type="checkbox"
            onClick={() => setShowAll(false)}
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-ghost"
            >
              <div className="relative w-fit">
                <svg
                  className="w-7 text-purple-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g strokeWidth="0"></g>
                  <g strokeLinecap="round" stroke-linejoin="round"></g>
                  <g className="stroke-purple-500 dark:stroke-purple-500">
                    <path
                      d="M15 19.25C15 20.0456 14.6839 20.8087 14.1213 21.3713C13.5587 21.9339 12.7956 22.25 12 22.25C11.2044 22.25 10.4413 21.9339 9.87869 21.3713C9.31608 20.8087 9 20.0456 9 19.25"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M5.58096 18.25C5.09151 18.1461 4.65878 17.8626 4.36813 17.4553C4.07748 17.048 3.95005 16.5466 4.01098 16.05L5.01098 7.93998C5.2663 6.27263 6.11508 4.75352 7.40121 3.66215C8.68734 2.57077 10.3243 1.98054 12.011 1.99998V1.99998C13.6977 1.98054 15.3346 2.57077 16.6207 3.66215C17.9069 4.75352 18.7557 6.27263 19.011 7.93998L20.011 16.05C20.0723 16.5452 19.9462 17.0454 19.6576 17.4525C19.369 17.8595 18.9386 18.144 18.451 18.25C14.2186 19.2445 9.81332 19.2445 5.58096 18.25V18.25Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
                <span className="absolute -right-1 -top-2 flex size-4 items-center justify-center rounded-full bg-red-500 text-center text-[10px] text-white">
                  0
                </span>
              </div>
            </label>
          </div>
          <div className="drawer-side z-50 mt-[70px]">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay opacity-0"
            ></label>
            <ul className="p-4 w-72 md:w-96 min-h-full bg-[#010313] text-white rounded-md shadow-lg">
              <div className="flex justify-between">
                <h1 className="text-2xl font-extrabold text-purple-200">
                  Notifications
                </h1>
                <ThreeDotsModal />
              </div>
              <hr className="border-gray-800 my-3" />
              {/* Display icon along with "No notifications" */}
              <div className="text-center text-lg text-gray-400 mt-10 flex items-center justify-center space-x-2">
                {/* No notification bell icon */}
                <svg
                  className="w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8c0-3.313-2.687-6-6-6s-6 2.687-6 6c0 4.963-2 6-2 6h16s-2-1.037-2-6z"></path>
                  <path d="M13.4 21c-.5 0-.9-.3-1.1-.7l-1.5-3.3H8.2l-1.5 3.3c-.2.4-.6.7-1.1.7s-.9-.3-1.1-.7L2 15c0-.5.4-.8.8-.8h15.6c.4 0 .8.3.8.8l-2.2 5.3c-.2.4-.6.7-1.1.7z"></path>
                </svg>
                <span>No notifications</span>
              </div>
            </ul>
          </div>
        </div>
      ) : (
        <div className="drawer drawer-end">
          <input
            id="my-drawer-4"
            type="checkbox"
            onClick={() => setShowAll(false)}
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-ghost"
            >
              <div className="relative w-fit">
                <svg
                  className="w-7 text-purple-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g strokeWidth="0"></g>
                  <g strokeLinecap="round" stroke-linejoin="round"></g>
                  <g className="stroke-purple-500 dark:stroke-purple-500">
                    <path
                      d="M15 19.25C15 20.0456 14.6839 20.8087 14.1213 21.3713C13.5587 21.9339 12.7956 22.25 12 22.25C11.2044 22.25 10.4413 21.9339 9.87869 21.3713C9.31608 20.8087 9 20.0456 9 19.25"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M5.58096 18.25C5.09151 18.1461 4.65878 17.8626 4.36813 17.4553C4.07748 17.048 3.95005 16.5466 4.01098 16.05L5.01098 7.93998C5.2663 6.27263 6.11508 4.75352 7.40121 3.66215C8.68734 2.57077 10.3243 1.98054 12.011 1.99998V1.99998C13.6977 1.98054 15.3346 2.57077 16.6207 3.66215C17.9069 4.75352 18.7557 6.27263 19.011 7.93998L20.011 16.05C20.0723 16.5452 19.9462 17.0454 19.6576 17.4525C19.369 17.8595 18.9386 18.144 18.451 18.25C14.2186 19.2445 9.81332 19.2445 5.58096 18.25V18.25Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
                <span className="absolute -right-1 -top-2 flex size-4 items-center justify-center rounded-full bg-red-500 text-center text-[10px] text-white">
                  {order?.length + payment?.length + filterApplication?.length}
                </span>
              </div>
            </label>
          </div>
          <div className="drawer-side z-50 mt-[70px]">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay opacity-0"
            ></label>
            <ul className="p-4 w-72 md:w-96 min-h-full bg-[#010313] text-white rounded-md shadow-lg">
              <div className="flex justify-between">
                <h1 className="text-2xl font-extrabold text-purple-200">
                  Notifications
                </h1>
                <ThreeDotsModal />
              </div>
              <hr className="border-gray-800 my-3" />

              {/* =================== Order Notifications ================ */}
              {order.length === 0 ? (
                ""
              ) : (
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-semibold">Order</h2>
                  {order?.length > 2 && (
                    <button
                      onClick={() => setShowAllOrder(!showAllOrder)}
                      className="text-sm text-blue-600 hover:underline hover:scale-110 cursor-pointer transition duration-200"
                    >
                      {showAllOrder ? "See Less" : "See All"}
                    </button>
                  )}
                </div>
              )}
              {order
                ?.sort((a, b) => new Date(a?.data) - new Date(b?.data))
                .slice(0, showAllOrder ? order?.length : 2)
                .map((item) => (
                  <div key={item?._id} className="mb-4">
                    <div className="flex items-center space-x-4 p-3 bg-[#000C21] rounded-md hover:bg-[#010313] transition">
                      <Image
                        height={200}
                        width={200}
                        src={item?.productImage}
                        alt="User"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="text-sm">
                          <span className="font-semibold text-purple-300">
                            {item?.name}
                          </span>{" "}
                          has confirmed the order for{" "}
                          <span className="font-semibold text-purple-300">
                            {item?.productName}
                          </span>
                          .
                        </p>
                        <motion.p className="text-neutral-600 text-xs hover:underline dark:text-neutral-400 text-left">
                          {item?.time ? formatTimeAgo(item?.time) : "Just now"}
                        </motion.p>
                      </div>
                      <MdNotificationsActive
                        className="text-blue-500"
                        size={24}
                      />
                    </div>
                  </div>
                ))}
              {order.length === 0 ? (
                ""
              ) : (
                <hr className="border-gray-800 my-3" />
              )}

              {/* =================== Payment Notifications ================ */}
              {payment.length === 0 ? (
                ""
              ) : (
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-semibold">Payment</h2>
                  {payment?.length > 2 && (
                    <button
                      onClick={() => setShowAllPayment(!showAllPayment)}
                      className="text-sm text-blue-600 hover:underline hover:scale-110 cursor-pointer transition duration-200"
                    >
                      {showAllPayment ? "See Less" : "See All"}
                    </button>
                  )}
                </div>
              )}
              {payment
                ?.sort((a, b) => new Date(a?.data) - new Date(b?.data))
                .slice(0, showAllPayment ? payment?.length : 2)
                .map((item) => (
                  <div key={item?._id} className="mb-4">
                    <div className="flex items-center space-x-4 p-3 bg-[#000C21] rounded-md hover:bg-[#010313] transition">
                      <Image
                        height={200}
                        width={200}
                        src={
                          "https://i.ibb.co.com/ZMmJdw1/pngtree-payment-icon-commerce-passive-income-offer-photo-image-19626354.jpg"
                        }
                        alt="User"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="text-sm">
                          <span className="font-semibold text-purple-300">
                            {item?.name}
                          </span>{" "}
                          has successfully completed the payment.
                        </p>

                        <motion.p className="text-neutral-600 text-xs hover:underline dark:text-neutral-400 text-left">
                          {item?.time ? formatTimeAgo(item?.time) : "Just now"}
                        </motion.p>
                      </div>
                      <MdNotificationsActive
                        className="text-blue-500"
                        size={24}
                      />
                    </div>
                  </div>
                ))}

              {payment.length === 0 ? (
                ""
              ) : (
                <hr className="border-gray-800 my-3" />
              )}

              {/* =================== Applications Notifications ================ */}
              {filterApplication.length === 0 ? (
                ""
              ) : (
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-semibold">Apply</h2>
                  {filterApplication?.length > 2 && (
                    <button
                      onClick={() => setShowAllApplication(!showAllApplication)}
                      className="text-sm text-blue-600 hover:underline hover:scale-110 cursor-pointer transition duration-200"
                    >
                      {showAllApplication ? "See Less" : "See All"}
                    </button>
                  )}
                </div>
              )}
              {filterApplication
                ?.sort((a, b) => new Date(a?.data) - new Date(b?.data))
                .slice(0, showAllApplication ? filterApplication?.length : 2)
                .map((item) => (
                  <div key={item?._id} className="mb-4">
                    <div className="flex items-center space-x-4 p-3 bg-[#000C21] rounded-md hover:bg-[#010313] transition">
                      <Image
                        height={200}
                        width={200}
                        src={
                          "https://i.ibb.co.com/Swv0Fdv/138-1384198-find-a-job-find-job-icon-png.jpg"
                        }
                        alt="User"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="text-sm">
                          <span className="font-semibold text-purple-300">
                            {item?.fullName}
                          </span>{" "}
                          has successfully completed the payment.
                        </p>

                        <motion.p className="text-neutral-600 text-xs hover:underline dark:text-neutral-400 text-left">
                          {item?.time ? formatTimeAgo(item?.time) : "Just now"}
                        </motion.p>
                      </div>
                      <MdNotificationsActive
                        className="text-blue-500"
                        size={24}
                      />
                    </div>
                  </div>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
