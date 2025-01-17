import Link from "next/link";
import React from "react";

const AdminFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-xs py-4 px-6 flex justify-between items-center">
      {/* Left Section */}
      <div>
        Thank you for creating with SuHan | 2024 ©{" "}
        <Link
          href="https://themewagon.com"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Supper Shop
        </Link>
      </div>

      {/* Right Section */}
      <div>v3.23.0</div>
    </footer>
  );
};

export default AdminFooter;
