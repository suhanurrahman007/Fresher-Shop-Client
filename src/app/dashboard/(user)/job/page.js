'use client'
import usePublicAxios from "@/components/hooks/usePublicAxios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TextArea } from "@/components/ui/textArea";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LabelInputContainer } from "@/components/ui/LabelInputContainer";
import useAuth from "@/components/hooks/useAuth";

export default function Job({ refetch }) {
  const publicAxios = usePublicAxios();

  const {
    register,
    handleSubmit,
    reset, // Import reset from useForm
  } = useForm();

  const onSubmit = async (data) => {
    // Create product object
    const jobInfo = {
      fullName: data?.name,
      email: data?.email,
      age: data?.age,
      address: data?.address,
      experience: data?.experience,
      description: data?.description,
      salary_expectation: data?.salary_expectation,
      phone: data?.phone,
      role: "user",
    };

    console.log(jobInfo);

    try {
      // Send product data to the backend API
      const res = await publicAxios.post("/job", jobInfo);
      if (res.data.insertedId) {
        toast.success("Job Apply successfully!");
        reset(); // Clear the form fields
        refetch();
      }
    } catch (error) {
      console.error("Error applying job", error);
      toast.error("Error applying job, please try again.");
    }
  };

  return (
    <div className=" inset-0 z-50 grid place-items-center bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent overflow-y-auto">
      <div className="relative w-full max-w-4xl p-6 rounded-lg bg-white shadow-lg dark:bg-[#0D0D21] dark:text-white">
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
                    Full Name <span className="text-red-700">*</span>
                  </Label>
                  <Input
                    id="name"
                    {...register("name", { required: true })}
                    // defaultValue={user?.displayName ? user?.displayName : ""}
                    placeholder="Enter Your Full Name"
                    type="text"
                  />
                </LabelInputContainer>
              </div>

              <div className="form-control text-xs">
                <LabelInputContainer>
                  <Label htmlFor="description">
                    Description <span className="text-red-700">*</span>
                  </Label>
                  <TextArea
                    id="description"
                    {...register("description", { required: true })}
                    placeholder="Enter Your Description"
                    type="text"
                  />
                </LabelInputContainer>
              </div>
            </div>

            <div className="space-y-3 p-4 dark:bg-[#010313] rounded-md text-gray-900 dark:text-white shadow-md">
              <h2 className="text-lg font-bold">Contact</h2>

              <div className="form-control text-xs">
                <LabelInputContainer>
                  <Label htmlFor="email">
                    Your Email <span className="text-red-700">*</span>
                  </Label>
                  <Input
                    id="email"
                    {...register("email", { required: true })}
                    // defaultValue={user?.email ? user?.email : ""}
                    // disabled
                    placeholder="example@gmail.com"
                    type="email"
                  />
                </LabelInputContainer>
              </div>

              <div className="lg:flex justify-center items-center gap-4">
                <div className="form-control w-full text-xs">
                  <LabelInputContainer>
                    <Label htmlFor="address">
                      Your Address
                      <span className="text-red-700">*</span>
                    </Label>
                    <Input
                      id="address"
                      {...register("address", { required: true })}
                      placeholder="Enter Your Address"
                      type="text"
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
                      placeholder="Enter your phone number"
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
              <h2 className="text-lg font-bold">Job Media</h2>

              <div className="form-control text-xs">
                <LabelInputContainer>
                  <Label htmlFor="age">
                    Your Age <span className="text-red-700">*</span>
                  </Label>
                  <Input
                    id="age"
                    {...register("age", { required: true })}
                    placeholder="Enter Your Age"
                    type="number"
                  />
                </LabelInputContainer>
              </div>
            </div>

            {/* Category Section */}
            <div className="space-y-3 p-4 dark:bg-[#010313] rounded-md text-gray-900 dark:text-white shadow-md">
              <h2 className="text-lg font-bold">Job Expectation</h2>

              <div className="form-control text-xs">
                <LabelInputContainer>
                  <Label htmlFor="experience">
                    Years of Experience <span className="text-red-700">*</span>
                  </Label>
                  <Input
                    id="experience"
                    {...register("experience", { required: true })}
                    placeholder="Years of Experience"
                    type="number"
                  />
                </LabelInputContainer>
              </div>

              <div className="form-control text-xs">
                <LabelInputContainer>
                  <Label htmlFor="salary_expectation">
                    Your Salary Expectation{" "}
                    <span className="text-red-700">*</span>
                  </Label>
                  <Input
                    id="salary_expectation"
                    {...register("salary_expectation", { required: true })}
                    placeholder="Enter Your Salary Expectation"
                    type="number"
                  />
                </LabelInputContainer>
              </div>
            </div>

            <button
              type="submit"
              className="group relative flex h-12 w-full items-center rounded-lg border-2 border-sky-400 p-4 text-sky-300"
            >
              <span>Apply Job</span>
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
  );
}
