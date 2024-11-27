import { useState } from "react";

export default function LatestSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Choose One");

  const options = ["Newest", "Oldest"];

  return (
    <div className="relative w-64 mb-5">
      {/* Dropdown Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-11 items-center justify-between rounded-md text-xs bg-[#0D0D21] px-3 py-2 text-[#0EA5E9] cursor-pointer"
      >
        <h1>{selectedValue}</h1>
        <svg
          className={`${isOpen ? "-rotate-180" : "rotate-0"} duration-300`}
          width={20}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="#0EA5E9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>

      {/* Dropdown Options */}
      <div
        className={`${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        } absolute z-10 mt-2 w-full text-sm rounded-md bg-[#0D0D21] text-[#0EA5E9] shadow-lg border border-[#0D0D21] duration-300`}
        role="listbox"
      >
        {options.map((option, idx) => (
          <div
            key={idx}
            onClick={() => {
              setSelectedValue(option);
              setIsOpen(false);
            }}
            className="px-6 py-2 hover:bg-[#0EA5E9] hover:text-[#0D0D21] cursor-pointer"
            role="option"
            aria-selected={selectedValue === option}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
