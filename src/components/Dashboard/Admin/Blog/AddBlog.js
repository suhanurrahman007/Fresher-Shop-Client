import useAuth from "@/components/hooks/useAuth";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TextArea } from "@/components/ui/textArea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { Select } from "@/components/ui/select";
import toast from "react-hot-toast";
import { categoryOptions, statusOptions, tagOptions } from "./BlogConstant";
import { LabelInputContainer } from "@/components/ui/LabelInputContainer";

export default function AddBlog({ refetch }) {
  const [openModal, setOpenModal] = useState(false);
  const publicAxios = usePublicAxios();
  const { user } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const postInfo = {
      name: user?.displayName,
      userImg: user?.photoURL,
      title: data?.title,
      description: data?.description,
      category: data?.category,
      status: data?.status,
      image: data?.image,
      tag: data.tag,
    };

    console.log(postInfo);

    const res = await publicAxios.post("/posts", postInfo);
    console.log(res.data);
    if (res.data.insertedId) {
      toast.success("Successfully Post here");
      reset()
      refetch()
      setOpenModal(false)
    }
  };
  return (
    <div>
      {/* Add Product Button */}
      <button
        onClick={() => setOpenModal(true)}
        className="relative text-xl border-4 border-sky-900 w-48 h-11 rounded-lg bg-sky-600 text-white group"
      >
        <span className="pr-8 text-sm">Add Blog</span>
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
                      <Label htmlFor="title">
                        Blog Title <span className="text-red-700">*</span>
                      </Label>
                      <Input
                        id="title"
                        {...register("title", { required: true })}
                        placeholder="Enter Product title"
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
                        {...register("description", { required: true })}
                        placeholder="Enter Product Description"
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
                        defaultValue="default"
                        {...register("status", { required: true })}
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
                          defaultValue={user?.displayName}
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
                          defaultValue={user?.photoURL}
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
                        Blog Category <span className="text-red-700">*</span>
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
                      <Label htmlFor="tag">
                        Blog Tag <span className="text-red-700">*</span>
                      </Label>
                      <Select
                        id="tag"
                        defaultValue="default"
                        {...register("tag", { required: true })}
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
                  <span>Add Blog</span>
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
