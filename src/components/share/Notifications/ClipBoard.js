"use client";

import { useState } from "react";
import { FaClone, FaRegClone } from "react-icons/fa";

const ClipBoard = ({ id, text, hover }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(id);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div>
      <div className="relative">
        <label className="sr-only">Label</label>
        <input
          type="password"
          className="hidden"
          value={id}
          disabled
          readOnly
        />
        <button
          onClick={handleCopy}
          className={`absolute top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 ${hover} rounded-lg p-2 inline-flex items-center justify-center`}
        >
          {copied ? (
            <span
              id="success-icon"
              className={copied ? "items-center" : "hidden"}
            >
              <svg
                className="w-3.5 h-3.5 text-green-500 dark:text-green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </span>
          ) : (
            <FaRegClone className={`w-3.5 h-3.5 ${text}`} />
          )}
        </button>
        <div
          role="tooltip"
          className={
            copied
              ? "absolute z-10 -top-8 inline-block px-1  text-sm font-medium text-white transition-opacity duration-300 bg-blue-500 rounded-lg shadow-sm tooltip dark:bg-blue-600"
              : "hidden"
          }
        >
          <span className={copied ? "" : "hidden"}>Copied!</span>
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
};

export default ClipBoard;
