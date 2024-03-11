"use client"
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useAuth from "@/components/hooks/useAuth";
import Link from "next/link";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, googleUser } = useAuth();
  const router = useRouter()



  const onLoginSubmit = async (data) => {
    await login(data?.email, data?.password)
      .then((result) => {
        console.log(result?.user);
        toast.success("Log in successfully")
        router.push('/')
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Something wrong....try agin");
      });
  };

  const onGoogleSubmit = () => {
    googleUser()
      .then((result) => {
          console.log(result.user);
          toast.success("Successfully Login");
          router.push("/")

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
    <div className="flex lg:h-screen items-center justify-center bg-[#8EA7E9]/20 p-6 md:p-0">
            <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md  md:w-[85%] lg:h-[90%]">
                {/* register design side  */}
                <div className="relative hidden h-full items-center justify-center bg-[#8EA7E9] lg:flex md:w-[60%] lg:w-[40%]">
                    <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br  from-white via-[#9eb6f8] to-[#6585dd]"></div>
                    <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br  from-white via-[#9eb6f8] to-[#6585dd]"></div>
                    <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd] transition-all"></div>
                    <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full  bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd]"></div>
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-medium text-white/80 ">Welcome Back</h2>
                        <p className="animate-pulse text-sm text-white/60">Please Enter Your Login Information</p>
                    </div>
                </div>
                {/* input side  */}
                <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
                    <Link href={"/"} className="pb-8 text-center text-3xl font-bold text-[#8EA7E9]">Login Here</Link>
                    <form form onSubmit = {
                        handleSubmit(onLoginSubmit)
                    }
                    className = "flex  w-full flex-col items-center justify-center gap-4" >
                        
                        <input className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]" type="email" placeholder="Email" name="email" {...register("email", { required: true })}/>
                        {errors.email && (
                            <span className="text-red-700 text-xs">
                            This field is required
                            </span>
                        )}
                        <input className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]" type="password" placeholder="Password" name="password" {...register("password", {
                        required: true,
                        maxLength: 20,
                        minLength: 6,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                        })}/>
                        {errors.password?.type === "required" && (
                            <p className="text-red-700 text-xs">
                            Password is required
                            </p>
                        )}

                        {errors.password?.type === "maxLength" && (
                            <p className="text-red-700 text-xs">
                            Password has been must 20 character under
                            </p>
                        )}

                        {errors.password?.type === "minLength" && (
                            <p className="text-red-700 text-xs">
                            Password has been must 6 character
                            </p>
                        )}

                        {errors.password?.type === "pattern" && (
                            <p className="text-red-700 text-xs">
                            password to have a mix of uppercase letters, special
                            characters, digits, and lowercase letters.
                            </p>
                        )}
                        <p className="text-[14px] text-gray-400">Do not have an account ? <Link href={"/signUp"} className="text-[#8EA7E9] duration-300 hover:scale-95 hover:underline hover:text-blue-900 font-bold">Create one</Link></p>
                        <input className="w-[80%] rounded-lg bg-[#8EA7E9] hover:bg-[#140d32] shadow-md duration-300 hover:scale-95 hover:shadow btn font-medium text-white md:w-[60%]" type="submit" value={"Login"} />
                    </form>
                    {/* divider  */}
                    <div className="my-6 flex items-center px-8">
                        <hr className="flex-1" />
                        <div className="mx-4 text-gray-400">OR</div>
                        <hr className="flex-1" />
                    </div>
                    {/* sign with google */}
                    <div className = "w-[80%] md:w-[60%] mx-auto flex items-center" >
                        <button
                            onClick={onGoogleSubmit}
                            type="submit"
                            className = "btn shadow-md duration-300 hover:scale-95 hover:shadow w-full text-white bg-[#8EA7E9] hover:bg-[#140d32]"
                            >
                            <FcGoogle className="transition-all text-xl hover:scale-125"></FcGoogle>
                            <span className="normal-case text-xs">Sign in with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Login;