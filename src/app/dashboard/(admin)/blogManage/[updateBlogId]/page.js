"use client";
import React from "react";
import { LabelInputContainer } from "../../addPost/page";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TextArea } from "@/components/ui/textArea";
import { Select } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import { categoryOptions } from "@/components/Dashboard/Admin/Product/ProductConstant";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import usePosts from "@/components/hooks/usePosts";
import { statusOptions, tagOptions } from "@/components/Dashboard/Admin/Blog/BlogConstant";

const UpdateBlog = ({ params }) => {
  const [posts, refetch] = usePosts();
  const publicAxios = usePublicAxios();

  const findBlog = posts.find(
    (item) => item?._id === params?.updateBlogId
  );

  const router = useRouter()
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    // Create product object
    const updateBlogInfo = {
      name: findBlog?.name,
      userImg: findBlog?.userImg,
      title: data?.title || findBlog?.title,
      description: data?.description || findBlog?.description,
      status: data?.status || findBlog?.status,
      category: data?.category || findBlog?.category,
      image: data?.image || findBlog?.image,
      tag: data?.tag || findBlog?.tag,
    };

    console.log(updateBlogInfo)

    try {
      // Send product data to the backend API
      const res = await publicAxios.put(
        `/posts/${params?.updateBlogId}`,
        updateBlogInfo
      );
      console.log(res?.data)
      if (res.data.modifiedCount > 0) {
        toast.success("Blog Update successfully!");
        refetch();
        router.push("/dashboard/blogManage");
      }
    } catch (error) {
      console.error("Error adding blog", error);
      toast.error("Error adding blog, please try again.");
    }
  };
  return (
    <div className="relative w-full max-w-4xl p-6 rounded-lg bg-white shadow-lg dark:bg-[#0D0D21] dark:text-white">
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
                <Label htmlFor="title">
                  Blog Title <span className="text-red-700">*</span>
                </Label>
                <Input
                  id="title"
                  {...register("title")}
                  defaultValue={findBlog?.title}
                  type="text"
                />
              </LabelInputContainer>
            </div>

            <div className="form-control text-xs">
              <LabelInputContainer>
                <Label htmlFor="description">
                  Blog Description <span className="text-red-700">*</span>
                </Label>
                <TextArea
                  id="description"
                  {...register("description")}
                  defaultValue={findBlog?.description}
                  type="text"
                />
              </LabelInputContainer>
            </div>
          </div>

          <div className="space-y-3 p-4 dark:bg-[#010313] rounded-md text-gray-900 dark:text-white shadow-md">
            <h2 className="text-lg font-bold">User Management</h2>
            <div className="form-control w-full text-xs">
              <LabelInputContainer>
                <Label htmlFor="status">
                  Status <span className="text-red-700">*</span>
                </Label>
                <Select
                  id="status"
                  {...register("status")}
                  defaultValue={findBlog?.status}
                  className="select bg-[#0D0D21] text-white select-bordered w-full"
                >
                  <option disabled value="default">
                    Select a status
                  </option>
                  {statusOptions?.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </Select>
              </LabelInputContainer>
            </div>

            <div className="lg:flex justify-center items-center gap-4">
              <div className="form-control text-xs">
                <LabelInputContainer>
                  <Label htmlFor="userName">
                    User Name <span className="text-red-700">*</span>
                  </Label>
                  <Input
                    id="userName"
                    defaultValue={findBlog?.name}
                    disabled
                    type="userName"
                  />
                </LabelInputContainer>
              </div>
              <div className="form-control w-full text-xs">
                <LabelInputContainer>
                  <Label htmlFor="userPhoto">
                    User Photo URL
                    <span className="text-red-700">*</span>
                  </Label>
                  <Input
                    id="userPhoto"
                    defaultValue={findBlog?.userImg}
                    disabled
                    type="url"
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
                  Blog Photo <span className="text-red-700">*</span>
                </Label>
                <Input
                  id="image"
                  {...register("image")}
                  defaultValue={findBlog?.image}
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
                  Blog Category <span className="text-red-700">*</span>
                </Label>
                <Select
                  id="category"
                  {...register("category")}
                  defaultValue={findBlog?.category}
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
                <Label htmlFor="tag">
                  Blog Tag <span className="text-red-700">*</span>
                </Label>
                <Select
                  id="tag"
                  {...register("tag")}
                  defaultValue={findBlog?.tag}
                  className="select bg-[#0D0D21] text-white select-bordered w-full"
                >
                  <option disabled value="default">
                    Select a Tag
                  </option>
                  {tagOptions?.map((type) => (
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
            <span>Update Blog</span>
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

export default UpdateBlog;
