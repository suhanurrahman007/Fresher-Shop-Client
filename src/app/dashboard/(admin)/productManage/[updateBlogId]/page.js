"use client";
import useProducts from "@/components/hooks/useProducts";
import React from "react";
import { LabelInputContainer } from "../../addPost/page";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TextArea } from "@/components/ui/textArea";
import { Select } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import { categoryOptions, productTypeOptions } from "@/components/Dashboard/Admin/Product/ProductConstant";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const UpdateProduct = ({ params }) => {
  const [products, refetch] = useProducts();
  const publicAxios = usePublicAxios();

  const findProduct = products.find(
    (item) => item?._id === params?.updateProductId
  );

  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset, // Import reset from useForm
  } = useForm();

  const onSubmit = async (data) => {
    // Create product object
    const updateProductInfo = {
      product_name: data?.name || findProduct?.product_name,
      brand: data?.brand || findProduct?.brand,
      price: parseFloat(data?.price) || findProduct?.price,
      discount_price:
        parseFloat(data?.discount_price) || findProduct?.discount_price,
      product_type: data?.product_type || findProduct?.product_type,
      description: data?.description || findProduct?.description,
      category: data?.category || findProduct?.category,
      image: data?.image || findProduct?.image,
      status: "Inactive",
    };


    try {
      // Send product data to the backend API
      const res = await publicAxios.put(
        `/products/${params?.updateProductId}`,
        updateProductInfo
      );
      console.log(res?.data)
      if (res.data.modifiedCount > 0) {
        toast.success("Product Update successfully!");
        refetch();
        router.push("/dashboard/productManage");
      }
    } catch (error) {
      console.error("Error adding product", error);
      toast.error("Error adding product, please try again.");
    }
  };
  return (
    <div className="relative w-full p-6 rounded-lg bg-white shadow-lg dark:bg-[#0D0D21] dark:text-white">
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
                  {...register("name",)}
                  defaultValue={findProduct?.product_name}
                  placeholder="Enter Product Name"
                  type="text"
                />
              </LabelInputContainer>
            </div>

            <div className="form-control text-xs">
              <LabelInputContainer>
                <Label htmlFor="description">
                  Product Description <span className="text-red-700">*</span>
                </Label>
                <TextArea
                  id="description"
                  {...register("description",)}
                  defaultValue={findProduct?.description}
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
                  {...register("price",)}
                  defaultValue={findProduct?.price}
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
                    {...register("discount_price",)}
                    defaultValue={findProduct?.discount_price}
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
                    {...register("brand",)}
                    defaultValue={findProduct?.brand}
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
                  {...register("image",)}
                  defaultValue={findProduct?.image}
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
                  {...register("category",)}
                  defaultValue={findProduct?.category}
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
                  defaultValue={findProduct?.product_type}
                  {...register("product_type",)}
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
            <span>Update Product</span>
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
  );
};

export default UpdateProduct;
