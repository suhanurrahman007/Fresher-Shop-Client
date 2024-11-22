'use client'
import useCart from "@/components/hooks/useCart";
import useUser from "@/components/hooks/useUser";
import { useState } from "react";
import BlackFridayCountdown from "./Countdown";
import ItemCart from "./ItemCart";

const LeftSection = () => {
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = (e) => {
      setIsChecked(e.target.checked);
    };
    const [cart, refetch] = useCart()
    const [user] = useUser()
    const myCart = cart?.filter((item) => item?.customerName === user?.name);

    return (
      <div className="space-y-3">
        <div className="space-y-3 bg-[#000C21] p-6 rounded-md">
          <div className="flex items-center flex-wrap lg:w-[62rem] gap-4">
            {/* Title Section */}
            <div>
              <h1 className="text-xl font-semibold">
                Cart ({myCart?.length ?? 0})
              </h1>
            </div>

            {/* Interactive Section */}
            {isChecked ? (
              <div className="flex lg:ml-60 gap-3 items-center">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    onChange={handleCheckboxChange}
                    className="checkbox checkbox-xs"
                    aria-label="Select all items"
                  />
                  <span>Select all items</span>
                </label>
                <span>|</span>
                <button className="text-red-600 hover:underline">
                  Delete selected items
                </button>
              </div>
            ) : (
              <label className="flex items-center lg:ml-[30rem] gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  className="checkbox checkbox-xs bg-[#010313] border-orange-700"
                  aria-label="Select all items"
                />
                <span>Select all items</span>
              </label>
            )}
          </div>
          <BlackFridayCountdown />
        </div>
        <div className="bg-[#000C21] p-5 rounded-md">
          <ItemCart myCart={myCart} refetch={refetch} />
        </div>
      </div>
    );
};

export default LeftSection;