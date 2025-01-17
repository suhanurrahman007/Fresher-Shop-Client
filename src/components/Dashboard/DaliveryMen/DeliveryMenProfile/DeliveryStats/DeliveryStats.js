import React from "react";
import { FaJediOrder } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";

const DeliveryStats = () => {
  const stats = [
    {
      count: 23,
      label: "Delivered",
      icon: <IoMdCheckmarkCircle className="text-green-300" />,
      gradient: "from-green-400 to-teal-600",
      textColor: "text-green-100",
    },
    {
      count: 45,
      label: "Out Of Delivery",
      icon: <TbTruckDelivery className="text-blue-400" />,
      gradient: "from-blue-500 to-indigo-700",
      textColor: "text-blue-100",
    },
    {
      count: 43,
      label: "Orders",
      icon: <FaJediOrder className="text-yellow-300" />,
      gradient: "from-purple-500 to-pink-500",
      textColor: "text-blue-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`flex justify-center items-center space-x-5 bg-gradient-to-br ${stat.gradient} px-8 py-8 rounded-lg shadow-lg shadow-blue-950 transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-950`}
        >
          <span className="text-6xl">{stat.icon}</span>
          <div className="text-center">
            <h2 className={`text-4xl font-extrabold ${stat.textColor}`}>
              {stat.count}
            </h2>
            <p className="text-lg font-semibold text-white">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeliveryStats;
