import useAuth from "@/components/hooks/useAuth";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const OrderModal = ({ order }) => {
  console.log(order);
  const [openModal, setOpenModal] = useState(false);

  const { user } = useAuth();
  const [deliveryDate, setDeliveryDate] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");

  const router = useRouter();

  const publicAxios = usePublicAxios();

  const addOrder = {
    name: user?.displayName,
    email: user?.email,
    deliveryDate,
    phone,
    productPrice: order?.price,
    productName: order?.product_name,
    area,
    status: "pending",
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    try {
      const res = await publicAxios.post("/order", addOrder);
      toast.success("Successfully placed order!");
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
        className="group relative flex h-12 w-36 items-center rounded-lg border-2 border-sky-400 p-4 text-sky-300"
      >
        <span>Order Now</span>
        <span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-sky-400 duration-300 group-hover:w-5/6">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <path
                d="M4 12H20M20 12L14 6M20 12L14 18"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </span>
      </button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full rounded-lg bg-white dark:bg-gray-900 drop-shadow-2xl sm:w-[500px] ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "-translate-y-20 opacity-0 duration-150"
          }`}
        >
          <form onSubmit={handleOrder}>
            <div className="flex items-center justify-center">
              <div>
                <div className="flex flex-col justify-center p-2 md:p-6">
                  <span className="mb-3 text-4xl text-center text-blue-500 font-bold">
                    Please, fill delivery <br /> form
                  </span>

                  {/* name and email */}
                  <div className="flex gap-2">
                    <div className="py-2 w-1/2">
                      <span className=" font-bold text-md">Name</span>
                      <input
                        className="w-full bg-[#010313]  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                        type="name"
                        placeholder="Enter Your Name"
                        defaultValue={user?.displayName}
                        disabled
                        name="name"
                      />
                    </div>
                    <div className="py-2 w-1/2">
                      <span className=" font-bold text-md">Email</span>
                      <input
                        className="w-full bg-[#010313]  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                        type="email"
                        defaultValue={user?.email}
                        placeholder="Enter Your email"
                        name="email"
                        disabled
                      />
                    </div>
                  </div>
                  {/* date and phone */}
                  <div className="flex gap-2">
                    <div className="py-2 w-1/2">
                      <span className=" font-bold text-md">Product Name</span>
                      <input
                        className="w-full bg-[#010313]  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                        type="name"
                        defaultValue={order?.product_name}
                        placeholder="Enter Your email"
                        name="name"
                        disabled
                      />
                    </div>
                    <div className="py-2 w-1/2">
                      <span className=" font-bold text-md">Delivery Date</span>
                      <input
                        className="w-full bg-[#010313] mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                        type="date"
                        onBlur={(e) => setDeliveryDate(e.target.value)}
                        required
                        name="date"
                      />
                    </div>
                  </div>
                  {/* Price (Tk) and weight */}
                  <div className="flex gap-2">
                    <div className="py-2 w-1/2">
                      <span className=" font-bold text-md">Phone</span>
                      <input
                        className="w-full bg-[#010313] mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                        type="text"
                        onBlur={(e) => setPhone(e.target.value)}
                        required
                        placeholder="Enter Your Phone"
                        name="phone"
                      />
                    </div>
                    <div className="py-2 w-1/2">
                      <span className=" font-bold text-md">Price (Tk)</span>
                      <input
                        className="w-full bg-[#010313]  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                        type="number"
                        placeholder="Price"
                        name="price"
                        defaultValue={order?.price}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="py-2 ">
                    <span className=" font-bold text-md">
                      Parcel Delivery Address
                    </span>
                    <textarea
                      className="w-full bg-[#010313] mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                      type="number"
                      onBlur={(e) => setArea(e.target.value)}
                      required
                      placeholder="Enter Parcel Delivery Address:"
                      name="price"
                    />
                  </div>
                  <div className="flex justify-center py-5">
                    <button
                      type="submit"
                      className="relative inline-block h-12 w-40 overflow-hidden border-sky-500 px-5 py-2 text-sky-500 shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-sky-600 before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-sky-600 after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
                    >
                      Submit
                    </button>
                    {/* <button
                      type="submit"
                      className="font-bold py-2 px-6 rounded border border-blue-700 hover:bg-blue-600"
                    >
                      Cash On Delivery
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
