import usePublicAxios from "@/components/hooks/usePublicAxios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TextArea } from "@/components/ui/textArea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Select } from "@/components/ui/select";
import toast from "react-hot-toast";
import { LabelInputContainer } from "@/components/ui/LabelInputContainer";
import { paymentTypeOptions, reasonOptions } from "./ReturnProductConstant";
import { TbTruckDelivery } from "react-icons/tb";
import useAuth from "@/components/hooks/useAuth";

export default function ReturnProduct({ refetch, orderReturn }) {
  const [openModal, setOpenModal] = useState(false);
  const { user } = useAuth();
  const publicAxios = usePublicAxios();

  const {
    register,
    handleSubmit,
    reset, // Import reset from useForm
  } = useForm();

  const onSubmit = async (data) => {
    // Create product object
    const ReturnProductInfo = {
      userName: user?.displayName,
      userEmail: user?.email,
      phone: data?.phone,
      product_name: orderReturn?.productName,
      price: orderReturn?.productPrice,
      description: data?.description,
      reason: data?.reason,
      paymentType: data?.paymentType,
      status: "Pending",
    };

    try {
      // Send product data to the backend API
      const res = await publicAxios.post("/return", ReturnProductInfo);
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("Product Return successfully!");
        reset(); // Clear the form fields
        refetch();
        setOpenModal(false); // Close the modal
      }
    } catch (error) {
      console.error("Error adding product", error);
      toast.error("Error adding product, please try again.");
    }
  };

  return (
    <div>
      {/* Add Product Button */}
      <button
        onClick={() => setOpenModal(true)}
        className="flex items-center justify-center p-2 bg-indigo-700 hover:bg-indigo-900 text-white rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110"
        title="Open Delivery Modal"
      >
        <TbTruckDelivery className="text-lg" />
      </button>

      {/* Modal Overlay */}
      {openModal && (
        <div
          onClick={() => setOpenModal(false)}
          className="fixed inset-0 z-50 grid place-items-center bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent"
        >
          {/* Modal Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl p-6 rounded-lg bg-white shadow-lg dark:bg-[#0D0D21] dark:text-white"
          >
            {/* Modal Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="lg:flex flex-col lg:flex-row gap-6"
            >
              {/* Left Section */}
              <div className="w-full lg:w-2/3 space-y-3">
                <div className="space-y-3 p-4 dark:bg-[#010313] rounded-md text-gray-900 dark:text-white shadow-md">
                  <h2 className="text-lg font-bold">General Information</h2>

                  <div className="form-control text-xs">
                    <LabelInputContainer>
                      <Label htmlFor="name">
                        Full Name <span className="text-green-700">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter Your Full Name"
                        defaultValue={user?.displayName}
                        type="text"
                        disabled
                      />
                    </LabelInputContainer>
                  </div>

                  <div className="form-control text-xs">
                    <LabelInputContainer>
                      <Label htmlFor="description">
                        Comment
                        <span className="text-red-700">*</span>
                      </Label>
                      <TextArea
                        id="description"
                        {...register("description", { required: true })}
                        placeholder="Enter Your Comment"
                        type="text"
                      />
                    </LabelInputContainer>
                  </div>
                </div>

                <div className="space-y-3 p-4 dark:bg-[#010313] rounded-md text-gray-900 dark:text-white shadow-md">
                  <h2 className="text-lg font-bold">Product Details</h2>

                  <div className="form-control text-xs">
                    <LabelInputContainer>
                      <Label htmlFor="price">
                        Base Price <span className="text-green-700">*</span>
                      </Label>
                      <Input
                        id="price"
                        placeholder="Enter Product Price"
                        defaultValue={orderReturn?.productPrice}
                        type="number"
                        disabled
                      />
                    </LabelInputContainer>
                  </div>

                  <div className="lg:flex justify-center items-center gap-4">
                    <div className="form-control w-full text-xs">
                      <LabelInputContainer>
                        <Label htmlFor="productName">
                          Product Name
                          <span className="text-green-700">*</span>
                        </Label>
                        <Input
                          id="productName"
                          type="text"
                          defaultValue={orderReturn?.productName}
                          disabled
                        />
                      </LabelInputContainer>
                    </div>
                    <div className="form-control w-full text-xs">
                      <LabelInputContainer>
                        <Label htmlFor="phone">
                          Phone Number <span className="text-red-700 ">*</span>
                        </Label>
                        <Input
                          id="phone"
                          {...register("phone", { required: true })}
                          placeholder="Enter Your Phone Number"
                          type="number"
                        />
                      </LabelInputContainer>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full lg:w-1/3 space-y-4">
                <div className="space-y-3 p-4 dark:bg-[#010313] rounded-md text-gray-900 dark:text-white shadow-md">
                  <h2 className="text-lg font-bold">Contact</h2>

                  <div className="form-control text-xs">
                    <LabelInputContainer>
                      <Label htmlFor="email">
                        User Email <span className="text-green-700">*</span>
                      </Label>
                      <Input
                        id="email"
                        defaultValue={user?.email}
                        disabled
                        type="email"
                      />
                    </LabelInputContainer>
                  </div>
                </div>

                {/* Category Section */}
                <div className="space-y-3 p-4 dark:bg-[#010313] rounded-md text-gray-900 dark:text-white shadow-md">
                  <h2 className="text-lg font-bold">Return Reason</h2>

                  <div className="form-control w-full my-6">
                    <LabelInputContainer>
                      <Label htmlFor="reason">
                        Reason <span className="text-red-700">*</span>
                      </Label>
                      <Select
                        id="reason"
                        defaultValue="default"
                        {...register("reason", { required: true })}
                        className="select bg-[#0D0D21] text-white select-bordered w-full"
                      >
                        <option disabled value="default">
                          Select a reason
                        </option>
                        {reasonOptions?.map((reason) => (
                          <option key={reason} value={reason}>
                            {reason}
                          </option>
                        ))}
                      </Select>
                    </LabelInputContainer>
                  </div>

                  <div className="form-control w-full my-6">
                    <LabelInputContainer>
                      <Label htmlFor="paymentType">
                        Payment Type <span className="text-red-700">*</span>
                      </Label>
                      <Select
                        id="paymentType"
                        defaultValue="default"
                        {...register("paymentType", { required: true })}
                        className="select bg-[#0D0D21] text-white select-bordered w-full"
                      >
                        <option disabled value="default">
                          Select a Payment Type
                        </option>
                        {paymentTypeOptions?.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </Select>
                    </LabelInputContainer>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative flex h-12 w-full items-center rounded-lg border-2 border-sky-400 p-4 text-sky-300"
                >
                  <span>Return Product</span>
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
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
