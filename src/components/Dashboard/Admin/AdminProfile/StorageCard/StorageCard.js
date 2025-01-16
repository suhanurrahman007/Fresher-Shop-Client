import React from "react";

const StorageCard = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg shadow-blue-950 w-full">
      <div className="mb-4">
        <p className="text-md font-semibold">
          Using Storage <span className="text-blue-400">1775.06 MB</span> of 2
          GB
        </p>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3 mb-5 flex gap-0.5">
        {/* Regular */}
        <div
          className="bg-blue-500 h-3 rounded-l-full"
          style={{ width: "50%" }}
        ></div>
        {/* System */}
        <div className="bg-blue-400 h-3" style={{ width: "25%" }}></div>
        {/* Shared */}
        <div className="bg-green-500 h-3" style={{ width: "10%" }}></div>
        {/* Free */}
        <div
          className="bg-gray-600 h-3 rounded-r-full"
          style={{ width: "15%" }}
        ></div>
      </div>
      <div className="flex gap-5 text-sm">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-2"></span>
          <p className="text-gray-500">Regular</p>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-blue-400 rounded-full inline-block mr-2"></span>
          <p className="text-gray-500">System</p>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-green-500 rounded-full inline-block mr-2"></span>
          <p className="text-gray-500">Shared</p>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-gray-600 rounded-full inline-block mr-2"></span>
          <p className="text-gray-500">Free</p>
        </div>
      </div>
    </div>
  );
};

export default StorageCard;
