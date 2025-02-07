"use client";

import FXForm from "@/components/Form/FxForm";
import useAuth from "@/components/hooks/useAuth";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BottomGradient,
  LabelInputContainer,
} from "@/components/ui/LabelInputContainer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function SignUp() {
  const publicAxios = usePublicAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, googleUser } = useAuth();

  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data);
    await createUser(data?.email, data?.password)
      .then((result) => {
        const userInfo = {
          name: data?.name,
          email: data?.email,
          role: "user",
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

  const onGoogleSubmit = async () => {
    await googleUser()
      .then((result) => {
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          role: "user",
        };

        publicAxios.post("/users", userInfo).then((res) => {
          toast.success("Successfully Login");
          router.push("/");
        });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Something wrong....try agin");
      });
  };

  return (
    <>
      <div className="flex items-center justify-center py-8">
        <Helmet>
          <title>Sign Up | Fresher Shop</title>
        </Helmet>
        <div
          data-aos="zoom-in-up"
          className="max-w-3xl bg-white p-6 shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-10 dark:bg-[#0D0D21]"
        >
          <div className="flex justify-center">
            <Link
              href={"/"}
              className="mb-3 text-3xl text-center text-white font-semibold tracking-tight"
            >
              Please Sign Up
            </Link>
          </div>
          <div className="flex flex-col justify-between items-center space-x-0 sm:flex-row sm:space-x-12">
            <div className="mb-8 w-full sm:mb-0 sm:w-1/2">
              {/* Left side form */}

              <FXForm className="my-3" onSubmit={handleSubmit(onSubmit)}>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="mobileNumber"
                    placeholder="01XXXXXXXXX"
                    type="tel"
                    {...register("mobileNumber", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^01[3-9]\d{8}$/,
                        message:
                          "Enter a valid Bangladeshi phone number (e.g., 01923345672)",
                      },
                    })}
                  />
                  {errors.mobileNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.mobileNumber.message}
                    </p>
                  )}
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    placeholder="you@example.com"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </LabelInputContainer>

                <LabelInputContainer className="mb-8">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    placeholder="••••••••"
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </LabelInputContainer>

                <button
                  className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="submit"
                >
                  Sign up &rarr;
                  <BottomGradient />
                </button>
              </FXForm>
            </div>
            {/* Right side content */}
            <div className="w-full lg:-mt-14 sm:w-1/2">
              <p className="mb-6 text-white text-sm">
                If you don&apos;t already have an account click the button below
                to create your account.
              </p>
              <Link
                href={"/signIn"}
                className="mb-2 inline-flex h-10 w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium uppercase text-white bg-sky-800 overflow-hidden relative z-10 group hover:text-sky-900 duration-700"
              >
                Sign In Account
                <span className="bg-sky-900 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-50 size-32 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
                <span className="bg-sky-800 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-100 size-28 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
                <span className="bg-sky-600 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-200 size-24 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
                <span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-300 size-20 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
                <span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-[400ms] size-16 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
              </Link>

              <p className="flex gap-1 text-white text-sm">
                Did you
                <a className="text-sky-500 underline" href="#">
                  forget your password?
                </a>
              </p>
              <p className="my-4 text-white text-center">OR</p>
              <button className="mb-2 flex h-10 w-full items-center justify-center gap-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6 text-white"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                SIGN IN WITH GITHUB
              </button>
              <button
                onClick={onGoogleSubmit}
                className="flex h-10 w-full items-center justify-center gap-1 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="size-6 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                SIGN IN WITH GOOGLE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
