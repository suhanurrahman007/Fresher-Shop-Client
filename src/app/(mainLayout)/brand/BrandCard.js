"use client";
import useAuth from "@/components/hooks/useAuth";
import useUser from "@/components/hooks/useUser";
import Image from "next/image";

export function BrandCard({ item }) {
  const [user] = useUser();
   // Check the item object in the console

  return (
    <div data-aos="zoom-out-up" className="max-w-xs w-full group/card">
      <div
        className={`cursor-pointer overflow-hidden relative card h-72 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4`}
        style={{
          backgroundImage: `url(${
            item?.brand_image || "https://via.placeholder.com/500"
          })`, // Fallback image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height={100}
            width={100}
            alt="Brand Logo"
            src={item?.brand_image || "https://via.placeholder.com/100"} // Fallback image
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {user?.name}
            </p>
            <p className="text-sm text-gray-400">2 min read</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {item?.brand_name}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {item?.brand_description?.split(" ")?.slice(0, 7)?.join(" ") +
              (item?.brand_description?.split(" ").length > 7 ? "..." : "")}
          </p>
        </div>
      </div>
    </div>
  );
}
