import { useState } from "react";
import { FaEye } from "react-icons/fa";

export const ApplicationDetails = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setOpenModal(true)}
        className="rounded-md bg-indigo-800 px-3 py-[4px] text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <FaEye />
      </button>

      {/* Modal Overlay */}
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm transition-all duration-200 ${
          openModal ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Modal Content */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full max-w-md rounded-lg bg-white p-6 text-center shadow-xl dark:bg-gray-800 dark:text-white transition-transform duration-300 ${
            openModal ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Icon */}
          <div className="mb-4">
            <svg
              className="w-16 h-16 mx-auto stroke-rose-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path
                  opacity="0.4"
                  d="M12 7.75V13"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M21.0802 8.58003V15.42C21.0802 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0802 7.45003 21.0802 8.58003Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  opacity="0.4"
                  d="M12 16.2002V16.3002"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </div>

          {/* User Details */}
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {item?.fullName}
                </h3>
                <span className="rounded-full bg-indigo-600 px-3 py-1 text-sm text-white">
                  Age: {item?.age}
                </span>
              </div>
              <hr className="border-t border-gray-300 dark:border-gray-700" />
              <div className="flex gap-2 justify-center">
                <h4 className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Email:
                </h4>
                <p className="text-gray-800 dark:text-gray-200">
                  {item?.email}
                </p>
              </div>
              <div className="flex gap-2 justify-center">
                <h4 className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Address:
                </h4>
                <p className="text-gray-800 dark:text-gray-200">
                  {item?.address}
                </p>
              </div>
              <div className="flex gap-2 justify-center">
                <h4 className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Description:
                </h4>
                <p className="text-gray-800 dark:text-gray-200">
                  {item?.description}
                </p>
              </div>
              <div className="flex gap-2 justify-center">
                <h4 className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Experience:
                </h4>
                <p className="text-gray-800 dark:text-gray-200">
                  {item?.experience}
                </p>
              </div>
              <div className="flex gap-2 justify-center">
                <h4 className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Salary Expectation:
                </h4>
                <p className="text-gray-800 dark:text-gray-200">
                  ${item?.salary_expectation}
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => setOpenModal(false)}
              className="rounded-md bg-indigo-600 px-6 py-2 text-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Explore Now
            </button>
            <button
              onClick={() => setOpenModal(false)}
              className="rounded-md border border-rose-600 px-6 py-2 text-sm text-rose-600 hover:bg-rose-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-rose-400"
            >
              Not Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
