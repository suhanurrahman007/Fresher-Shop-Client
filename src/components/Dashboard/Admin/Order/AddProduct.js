import usePublicAxios from "@/components/hooks/usePublicAxios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TextArea } from "@/components/ui/textArea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { Select } from "@/components/ui/select";
import toast from "react-hot-toast";
import { categoryOptions, productTypeOptions } from "./ProductConstant";
import { LabelInputContainer } from "@/components/ui/LabelInputContainer";

export default function AddProduct({ refetch }) {
  const [openModal, setOpenModal] = useState(false);
  const publicAxios = usePublicAxios();



  const {
    register,
    handleSubmit,
    reset, // Import reset from useForm
  } = useForm();

  const onSubmit = async (data) => {
    // Create product object
    const productInfo = {
      product_name: data?.name,
      brand: data?.brand,
      price: parseFloat(data?.price),
      discount_price: parseFloat(data?.discount_price),
      product_type: data?.product_type,
      description: data?.description,
      category: data?.category,
      image: data?.image,
      status: "Inactive",
    };

    console.log(productInfo);

    try {
      // Send product data to the backend API
      const res = await publicAxios.post("/products", productInfo);
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("Product added successfully!");
        reset(); // Clear the form fields
        refetch()
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
        className="relative text-xl border-4 border-sky-900 w-48 h-11 rounded-lg bg-sky-600 text-white group"
      >
        <span className="pr-8 text-sm">Add Product</span>
        <span className="absolute right-0 top-0 h-full flex items-center justify-center w-10 bg-sky-900 group-hover:w-full transition-all duration-300">
          <FaPlus />
        </span>
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
                        Product Name <span className="text-red-700">*</span>
                      </Label>
                      <Input
                        id="name"
                        {...register("name", { required: true })}
                        placeholder="Enter Product Name"
                        type="text"
                      />
                    </LabelInputContainer>
                  </div>

                  <div className="form-control text-xs">
                    <LabelInputContainer>
                      <Label htmlFor="description">
                        Product Description{" "}
                        <span className="text-red-700">*</span>
                      </Label>
                      <TextArea
                        id="description"
                        {...register("description", { required: true })}
                        placeholder="Enter Product Description"
                        type="text"
                      />
                    </LabelInputContainer>
                  </div>
                </div>

                <div className="space-y-3 p-4 dark:bg-[#010313] rounded-md text-gray-900 dark:text-white shadow-md">
                  <h2 className="text-lg font-bold">Pricing</h2>

                  <div className="form-control text-xs">
                    <LabelInputContainer>
                      <Label htmlFor="price">
                        Base Price <span className="text-red-700">*</span>
                      </Label>
                      <Input
                        id="price"
                        {...register("price", { required: true })}
                        placeholder="Enter Product Price"
                        type="number"
                      />
                    </LabelInputContainer>
                  </div>

                  <div className="lg:flex justify-center items-center gap-4">
                    <div className="form-control w-full text-xs">
                      <LabelInputContainer>
                        <Label htmlFor="discount_price">
                          Discount Percentage (%){" "}
                          <span className="text-red-700">*</span>
                        </Label>
                        <Input
                          id="discount_price"
                          {...register("discount_price", { required: true })}
                          placeholder="Enter Product Discount Price"
                          type="number"
                        />
                      </LabelInputContainer>
                    </div>
                    <div className="form-control w-full text-xs">
                      <LabelInputContainer>
                        <Label htmlFor="brand">
                          Product brand <span className="text-red-700 ">*</span>
                        </Label>
                        <Input
                          id="brand"
                          {...register("brand", { required: true })}
                          placeholder="Enter Product brand"
                          type="text"
                        />
                      </LabelInputContainer>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full lg:w-1/3 space-y-4">
                <div className="space-y-3 p-4 dark:bg-[#010313] rounded-md text-gray-900 dark:text-white shadow-md">
                  <h2 className="text-lg font-bold">Product Media</h2>

                  <div className="form-control text-xs">
                    <LabelInputContainer>
                      <Label htmlFor="image">
                        Product Photo <span className="text-red-700">*</span>
                      </Label>
                      <Input
                        id="image"
                        {...register("image", { required: true })}
                        placeholder="Enter Product Photo URL"
                        type="url"
                      />
                    </LabelInputContainer>
                  </div>
                </div>

                {/* Category Section */}
                <div className="space-y-3 p-4 dark:bg-[#010313] rounded-md text-gray-900 dark:text-white shadow-md">
                  <h2 className="text-lg font-bold">Category</h2>

                  <div className="form-control w-full my-6">
                    <LabelInputContainer>
                      <Label htmlFor="category">
                        Product Category <span className="text-red-700">*</span>
                      </Label>
                      <Select
                        id="category"
                        defaultValue="default"
                        {...register("category", { required: true })}
                        className="select bg-[#0D0D21] text-white select-bordered w-full"
                      >
                        <option disabled value="default">
                          Select a Category
                        </option>
                        {categoryOptions?.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </Select>
                    </LabelInputContainer>
                  </div>

                  <div className="form-control w-full my-6">
                    <LabelInputContainer>
                      <Label htmlFor="product_type">
                        Product Type <span className="text-red-700">*</span>
                      </Label>
                      <Select
                        id="product_type"
                        defaultValue="default"
                        {...register("product_type", { required: true })}
                        className="select bg-[#0D0D21] text-white select-bordered w-full"
                      >
                        <option disabled value="default">
                          Select a Product Type
                        </option>
                        {productTypeOptions?.map((type) => (
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
                  <span>Add Product</span>
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
