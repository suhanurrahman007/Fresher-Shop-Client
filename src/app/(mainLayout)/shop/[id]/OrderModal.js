"use client";
import useAuth from "@/components/hooks/useAuth";
import useProducts from "@/components/hooks/useProducts";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const OrderModal = ({ totalPrice, discountPrice }) => {
  console.log(discountPrice)
  const [products, refetch] = useProducts();
  const { user } = useAuth();
  const publicAxios = usePublicAxios();
  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");

  const order = products?.find((item) => item?.price === totalPrice);

  const addOrder = {
    name: user?.displayName,
    email: user?.email,
    deliveryDate,
    phone,
    productPrice: discountPrice,
    productName: order?.product_name || "Custom Product",
    productImage: order?.image || "https://i.ibb.co.com/K2JPnyv/avatar.png",
    area,
    status: "pending",
    payment: "Cash On Delivery",
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    if (!deliveryDate || !phone || !area) {
      toast.error("Please fill all required fields.");
      return;
    }

    try {
      const res = await publicAxios.post("/order", addOrder);
      toast.success("Successfully placed order!");
      setOpenModal(false);
      router.push("/payment");
    } catch (error) {
      console.error(error);
      toast.error("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="mx-auto flex w-72 items-center justify-center">
      <button
        onClick={() => setOpenModal(true)}
        className="group relative flex h-12 w-full items-center rounded-lg border-2 border-sky-400 p-4 text-sky-300"
      >
        <span>Order Now</span>
        <span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-sky-400 duration-300 group-hover:w-5/6">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12H20M20 12L14 6M20 12L14 18"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
      </button>

      {/* Modal */}
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full rounded-lg bg-[#010313] drop-shadow-2xl sm:w-[500px] ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "-translate-y-20 opacity-0 duration-150"
          }`}
        >
          <form onSubmit={handleOrder}>
            <div className="p-6">
              <h2
                data-aos="flip-up"
                className="mb-6 text-2xl text-center font-bold text-blue-500"
              >
                Fill Delivery Form
              </h2>

              <div className="grid gap-4">
                {/* Name and Email */}
                <div className="flex gap-3">
                  <Input type="text" value={user?.displayName || ""} disabled />
                  <Input
                    type="email"
                    value={user?.email || ""}
                    disabled
                    placeholder="Email"
                  />
                </div>

                {/* Product Name and Delivery Date */}
                <div className="flex gap-3">
                  <Input
                    type="text"
                    value={order?.product_name || "Custom Product"}
                    disabled
                    placeholder="Product Name"
                  />
                  <Input
                    type="date"
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    required
                  />
                </div>

                {/* Phone and Price */}
                <div className="flex gap-3">
                  <Input
                    type="text"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="Phone"
                  />
                  <Input
                    type="text"
                    value={`BDT ${discountPrice.toFixed(2)}`}
                    disabled
                  />
                </div>

                {/* Delivery Area */}
                <Input
                  onChange={(e) => setArea(e.target.value)}
                  required
                  placeholder="Enter Delivery Address"
                ></Input>

                {/* Submit Button */}
                <button
                  data-aos="zoom-out-up"
                  type="submit"
                  className="text-xl w-full h-10 text-white bg-sky-800 overflow-hidden relative z-10 group hover:text-sky-900 duration-700"
                >
                  Check Out
                  <span className="bg-sky-900 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-50 size-32 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
                  <span className="bg-sky-800 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-100 size-28 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
                  <span className="bg-sky-600 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-200 size-24 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
                  <span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-300 size-20 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
                  <span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-[400ms] size-16 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
