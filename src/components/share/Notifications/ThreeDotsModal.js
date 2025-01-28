import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const ThreeDotsModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="relative">
      {/* Three Dots Icon */}
      <button
        onClick={toggleModal}
        className="text-white"
      >
        <BsThreeDots size={24} className="mr-3"/>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="absolute right-0 mt-2 w-56 bg-[#000C21] text-white shadow-lg rounded-lg z-50"
          onMouseLeave={() => setModalOpen(false)} // Optional: Close when mouse leaves the modal
        >
          <ul className="py-2">
            <li
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                alert("Marked all as read!");
                setModalOpen(false);
              }}
            >
              Mark all as read
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                alert("Opening notification settings...");
                setModalOpen(false);
              }}
            >
              Notification settings
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                alert("Opening notifications...");
                setModalOpen(false);
              }}
            > 
              Open notifications
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThreeDotsModal;
