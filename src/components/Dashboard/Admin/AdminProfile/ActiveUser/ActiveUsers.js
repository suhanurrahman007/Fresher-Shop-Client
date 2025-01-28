import Image from "next/image";
import React from "react";
import BandwidthSaved from "../BandwidthSaved";
import useAllUser from "@/components/hooks/useAllUser";
import image from "@/assets/avatar.png";
import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";

const ActiveUsers = () => {
  const [allUser] = useAllUser();

  const bandwidth = {
    percentage: 93,
    saved: "35.75 GB",
    total: "38.44 GB",
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
      {/* Active Users */}
      <div
        data-aos="zoom-in-up"
        className="bg-[rgb(13,13,33)] p-4 space-y-5 shadow-blue-950 rounded-lg shadow-lg"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-md font-semibold text-white">Active Users</h2>
          <BsThreeDots
            className="text-gray-400 text-lg cursor-pointer"
            title="More options"
          />
        </div>
        <ul>
          {allUser?.map((user, index) => (
            <li key={index} className="flex items-center mb-3">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="relative group">
                  <Image
                    src={image}
                    width={500}
                    height={500}
                    className="size-[50px] bg-slate-500 object-cover rounded-full border-[2px] border-blue-600"
                    alt="avatar navigate ui"
                  />
                  {user && (
                    <>
                      <span className="size-3 bg-green-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                      <span className="size-3 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
                    </>
                  )}
                </div>
              </label>
              <div className="ml-3">
                <p className="text-white font-semibold hover:text-blue-700 hover:underline">
                  {user?.name}
                </p>
                <p className="text-gray-400 text-sm">{user?.role}</p>
              </div>
              <span
                className={`ml-auto w-3 h-3 rounded-full ${
                  user.status === "online"
                    ? "bg-green-500"
                    : user.status === "away"
                    ? "bg-orange-500"
                    : "bg-green-500"
                }`}
              ></span>
            </li>
          ))}
        </ul>
        <Link href="#" className="text-blue-500 hover:underline text-sm">
          All active users &gt;
        </Link>
      </div>

      <BandwidthSaved />
    </div>
  );
};

export default ActiveUsers;
