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

const LoginPage = () => {
  const publicAxios = usePublicAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, googleUser } = useAuth();
  const router = useRouter();

  const onLoginSubmit = async (data) => {
    await login(data?.email, data?.password)
      .then((result) => {
        toast.success("Log in successfully");
        router.push("/");
      })
      .catch((error) => {
        console.log(error.message);
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

  const renderErrorMessage = (error) => error?.message;

  return (
    <>
      <div className="flex h-full items-center justify-center md:p-0">
        <Helmet>
          <title>Login | Fresher Shop</title>
        </Helmet>
        <div
          data-aos="zoom-in-up"
          className="flex h-full w-full lg:px-24 lg:py-10 overflow-hidden rounded-xl shadow-md"
        >
          {/* Design Side */}
          <div className="relative hidden items-center justify-center bg-blue-300 md:flex md:w-[50%]">
            <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br from-white via-blue-300 to-blue-400"></div>
            <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br from-white via-blue-300 to-blue-400"></div>
            <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-blue-300 to-blue-400 transition-all"></div>
            <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full bg-gradient-to-br from-white via-blue-300 to-blue-400"></div>
            <div className="z-10 space-y-2 text-center">
              <h2 className="text-3xl font-medium text-white/80">
                Welcome Back
              </h2>
              <p className="animate-pulse text-sm text-white/60">
                Please Enter Your Information
              </p>
            </div>
          </div>
          {/* Form Side */}
          <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%] dark:bg-[#0B0C20]">
            <Link
              href={"/"}
              className="pb-8 text-center text-3xl font-semibold tracking-tight text-blue-400"
            >
              Sign In
            </Link>
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <FXForm onSubmit={handleSubmit(onLoginSubmit)}>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    placeholder="you@example.com"
                    type="email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {renderErrorMessage(errors.email)}
                    </p>
                  )}
                </LabelInputContainer>

                <LabelInputContainer className="mb-8">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    placeholder="••••••••"
                    type="password"
                    {...register("password")}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {renderErrorMessage(errors.password)}
                    </p>
                  )}
                </LabelInputContainer>
                <p className="text-[14px] text-gray-400 -mt-5 mb-3">
                  Do not have an account ?{" "}
                  <Link href="/signUp" className="text-blue-400">
                    Create one
                  </Link>
                </p>
                <button
                  className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="submit"
                >
                  Sign In &rarr;
                  <BottomGradient />
                </button>
              </FXForm>
            </div>
            {/* Divider */}
            <div className="my-8 flex items-center px-8">
              <hr className="flex-1 border-blue-400" />
              <div className="mx-4 text-blue-400">OR</div>
              <hr className="flex-1 border-blue-400" />
            </div>
            {/* Sign in with Google */}
            <button
              onClick={onGoogleSubmit}
              type="submit"
              className="group mx-auto flex h-[50px] w-fit items-center overflow-hidden rounded-full shadow-md outline-none ring-1 ring-blue-400"
            >
              <div className="relative z-20 flex h-full items-center bg-blue-400 px-4 text-lg text-white duration-300 group-hover:bg-transparent group-hover:text-blue-400">
                Sign in with
              </div>
              <span className="flex h-full items-center px-4 text-xl font-bold text-blue-400 duration-300 group-hover:bg-blue-400 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="size-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
