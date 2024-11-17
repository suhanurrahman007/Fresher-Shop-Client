"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useAuth from "@/components/hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import usePublicAxios from "@/components/hooks/usePublicAxios";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const publicAxios = usePublicAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile, googleUser } = useAuth();

  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data);
    await createUser(data?.email, data?.password);
    await updateUserProfile(data?.name)
      .then((result) => {
        console.log(result?.name);
        
        const userInfo = {
          name: data?.name,
          email: data?.email,
        };

        publicAxios.post("/users", userInfo).then((res) => {
          console.log(res.data);
          toast.success("Successfully Sign Up");
          router.push("/");
        });
      })
      .catch((error) => {
        console.log(error?.message);
        toast.error("Something wrong....try agin");
      });
  };

  const onGoogleSubmit = () => {
    googleUser()
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Login");
        router.push("/");

        // const userInfo = {
        //   name: result?.user?.displayName,
        //   email: result?.user?.email,
        // };

        // publicAxios.post("/users", userInfo).then((res) => {
        //   console.log(res.data);
        //   toast.success("Successfully Login");
        //   router.push("/")
        // });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Something wrong....try agin");
      });
  };

  return (
    <div>
      <div className="w-90 lg:w-[90%] mx-auto bg-white flex  items-center relative overflow-hidden shadow-xl">
        {/* register form  */}
        <form
          form
          onSubmit={handleSubmit(onSubmit)}
          className={`p-8 w-full md:w-1/2 lg:translate-x-0' duration-500`}
        >
          <h2 className="backdrop-blur-sm text-2xl lg:text-3xl font-bold text-center text-[#8EA7E9] pb-4">
            Please Register
          </h2>
          <div className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">
                  Enter Your User Name <span className="text-red-700">*</span>
                </span>
              </label>
              <div className="relative rounded-lg">
                <input
                  className="w-full peer rounded-lg border border-[#1B8EF8] px-4 py-2 text-[#1B8EF8] focus:outline-none"
                  type="text"
                  placeholder=""
                  name="name"
                  {...register("name", { required: true })}
                />
                <label
                  className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400"
                  htmlFor=""
                >
                  Name
                </label>
                {errors.name && (
                  <span className="text-red-700 mt-3 text-xs">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            <div>
              <label className="label">
                <span className="label-text">
                  Enter Your Email <span className="text-red-700">*</span>
                </span>
              </label>
              <div className="relative rounded-lg">
                <input
                  className="w-full peer rounded-lg border border-[#1B8EF8] px-4 py-2 text-[#1B8EF8] focus:outline-none"
                  type="text"
                  placeholder=""
                  name="email"
                  {...register("email", { required: true })}
                />
                <label
                  className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400"
                  htmlFor=""
                >
                  Email
                </label>
                {errors.email && (
                  <span className="text-red-700 mt-3 text-xs">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            <div>
              <label className="label">
                <span className="label-text">
                  Enter Your Password <span className="text-red-700">*</span>
                </span>
              </label>
              <div className="relative rounded-lg">
                <input
                  className="w-full peer rounded-lg border border-[#1B8EF8] px-4 py-2  focus:outline-none"
                  type={showPassword ? "text" : "password"}
                  placeholder=""
                  name="password"
                  {...register("password", { required: true })}
                />
                <label
                  className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400"
                  htmlFor=""
                >
                  Password
                </label>
                {errors.password?.type === "required" && (
                  <p className="text-red-700 mt-3 text-xs">
                    Password is required
                  </p>
                )}

                {errors.password?.type === "maxLength" && (
                  <p className="text-red-700 mt-3 text-xs">
                    Password has been must 20 character under
                  </p>
                )}

                {errors.password?.type === "minLength" && (
                  <p className="text-red-700 mt-3 text-xs">
                    Password has been must 6 character
                  </p>
                )}

                {errors.password?.type === "pattern" && (
                  <p className="text-red-700 mt-3 text-xs">
                    password to have a mix of uppercase letters, special
                    characters, digits, and lowercase letters.
                  </p>
                )}
              </div>

              <label className="label flex justify-end">
                <Link
                  href="#"
                  className="label-text-alt text-blue-700 hover:text-blue-900 duration-300 hover:scale-110 hover:font-bold"
                >
                  Forgot password?
                </Link>
              </label>

              <div className="inline-flex items-center -ml-3">
                <label
                  className="relative flex cursor-pointer items-center rounded-full p-3"
                  htmlFor="checkbox"
                  data-ripple-dark="true"
                >
                  <input
                    onClick={() => setShowPassword(!showPassword)}
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#8EA7E9] checked:bg-[#8EA7E9] checked:before:bg-[#8EA7E9] hover:before:opacity-10"
                    id="checkbox"
                  />
                  <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      // stroke-width="1"
                    >
                      <path
                        //   fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        //   clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-px cursor-pointer select-none font-light text-gray-700"
                  htmlFor="checkbox"
                >
                  <span className="">
                    {showPassword ? "Hide Password" : "Show Password"}
                  </span>
                </label>
              </div>
            </div>
          </div>
          {/* button type will be submit for handling form submission*/}
          <input
            className="w-full rounded-lg bg-[#8EA7E9] hover:bg-[#140d32] shadow-md duration-300 hover:scale-95 hover:shadow btn font-medium text-white my-6"
            type="submit"
            value={"Sign Up"}
          />

          <div>
            <div className="my-6 flex items-center px-8">
              <hr className="flex-1" />
              <div className="mx-4 text-gray-400">OR</div>
              <hr className="flex-1" />
            </div>

            <p className="mb-3 text-center">
              Already have an account ?{" "}
              <Link
                href={"/signIn"}
                className="text-[#8EA7E9] duration-300 hover:scale-95 hover:underline hover:text-blue-900 font-bold"
              >
                Login
              </Link>
            </p>
            <hr />
            <button
              onClick={onGoogleSubmit}
              type="submit"
              className="btn shadow-md duration-300 hover:scale-95 hover:shadow w-full text-white bg-[#8EA7E9] hover:bg-[#140d32]"
            >
              <FcGoogle className="transition-all text-xl hover:scale-125"></FcGoogle>
              <span className="normal-case text-xs">Sign in with Google</span>
            </button>
          </div>
        </form>

        {/* img */}
        <div
          div
          className={`hidden md:block absolute border-[#8EA7E9] border-l-[1px] md:w-1/2 h-full top-0 z-50 duration-500 overflow-hidden bg-black/20 translate-x-full rounded-bl-full`}
        >
          <Image
            width={500}
            height={500}
            src="https://i.ibb.co/sgWZDph/Image-AC.png"
            className="h-full w-full"
            alt="card navigate ui"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
