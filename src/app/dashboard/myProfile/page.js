"use client";
import { FaCommentDots, FaUserFriends } from "react-icons/fa";
import { SiTask } from "react-icons/si";
import Image from "next/image";
import useAuth from "@/components/hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();
  return (
    <div className="px-4 py-8 bg-[#010313] text-white space-y-8">
      <h2 className="text-2xl font-bold">
        Hi,{" "}
        <span className="text-orange-700">
          {user?.displayName ? user?.displayName : "There"}
        </span>{" "}
        Welcome Back!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex justify-center items-center space-x-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-8 rounded-lg">
          <span className="text-5xl">
            <SiTask></SiTask>
          </span>
          <div>
            <h2 className="text-2xl font-bold">23</h2>
            <p className="text-lg font-bold">Orders</p>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-5 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] px-8 py-8 rounded-lg">
          <span className="text-5xl">
            <FaUserFriends></FaUserFriends>
          </span>
          <div>
            <h2 className="text-2xl font-bold">16</h2>
            <p className="text-lg font-bold">Users</p>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-5 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] px-8 py-8 rounded-lg">
          <span className="text-5xl">
            <FaCommentDots></FaCommentDots>
          </span>
          <div>
            <h2 className="text-2xl font-bold">72</h2>
            <p className="text-lg font-bold">Reviews</p>
          </div>
        </div>
      </div>

      <div
        className="lg:flex px-2 lg:flex-col lg:justify-center lg:items-center shadow-xl rounded-2xl"
      >
        <div className="h-24 lg:w-2/3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        <div className="h-72 lg:w-2/3 flex flex-col justify-center items-center">
          <Image
            className="w-20 rounded-full lg:-mt-36"
            src={user?.photoURL}
            alt="user"
            width={100}
            height={100}
          />
          <div className="badge mt-2 badge-accent badge-outline">User</div>
          <h2 className="py-5">
            <span className="font-bold mr-2">User Id:</span>
            <span className="text-md text-purple-400">{user?.uid}</span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-5 justify-center">
            <div className="space-y-2">
              <p className="font-bold">Name</p>
              <p className="text-xs text-purple-400">{user?.displayName}</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold">Email:</p>
              <p className="text-xs text-purple-400">{user?.email}</p>
            </div>
            <div className="space-y-2">
              <button className="text-white text-xs mr-2 font-bold py-2 px-5 rounded border border-purple-700  hover:bg-purple-700">
                Update Profile
              </button>
              <button className="text-white text-xs font-bold py-2 px-2 rounded border border-purple-700  hover:bg-purple-700">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
