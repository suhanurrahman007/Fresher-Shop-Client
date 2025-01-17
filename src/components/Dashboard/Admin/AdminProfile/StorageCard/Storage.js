import React from "react";

const Storage = () => {
  return (
    <div
      className="bg-gray-800 text-white rounded-lg px-5 py-3 w-full shadow-lg shadow-blue-950 relative"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/wLRf4gs/corner-1.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
      }}
    >
      {/* Title */}
      <h3 className="text-orange-500 text-lg font-bold mb-1">
        Running out of your space?
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-3">
        Your storage will be running out soon. Get more space and powerful
        productivity features.
      </p>

      {/* Upgrade link */}
      <a href="#" className="text-orange-500 text-sm font-bold hover:underline">
        Upgrade storage &gt;
      </a>
    </div>
  );
};

export default Storage;
