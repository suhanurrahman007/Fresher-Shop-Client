"use client";
import useAuth from "@/components/hooks/useAuth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaUserTag,
  FaServicestack,
  FaBlog,
} from "react-icons/fa";
import { BiLogOut, BiSolidDashboard } from "react-icons/bi";
import { MdLogin, MdCalculate } from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import "./Navbar.css";
import Image from "next/image";
import logo from "@/assets/Logo.png";
import avatar from "@/assets/avatar.png";
import toast from "react-hot-toast";
import { CartShop } from "./CartIcon";

const Navbar = () => {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const links = (
    <>
      <li>
        <Link href="/">
          <span
            className={`nav-link ${
              pathname === "/"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center"
            }`}
          >
            <span className="mr-1">
              <FaHome />
            </span>
            Home
          </span>
        </Link>
      </li>
      <li>
        <Link href="/shop">
          <span
            className={`nav-link ${
              pathname === "/shop"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center"
            }`}
          >
            <span className="mr-1">
              <FaShopify />
            </span>
            Shop
          </span>
        </Link>
      </li>
      <li>
        <Link href="/brand">
          <span
            className={`nav-link ${
              pathname === "/brand"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center"
            }`}
          >
            <span className="mr-1">
              <FaServicestack className="text-red-700" />
            </span>
            Our Brand
          </span>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <span
            className={`nav-link ${
              pathname === "/blog"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center"
            }`}
          >
            <span className="mr-1">
              <FaBlog />
            </span>
            Blog
          </span>
        </Link>
      </li>
      <li>
        <Link href="/support">
          <span
            className={`nav-link ${
              pathname === "/support"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center"
            }`}
          >
            <span className="mr-1">
              <FaUserTag />
            </span>
            Help & Support
          </span>
        </Link>
      </li>

      <li>
        <Link href="/contactUs">
          <span
            className={`nav-link ${
              pathname === "/contactUs"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center"
            }`}
          >
            <span className="mr-1">
              <MdCalculate className="text-purple-700" />
            </span>
            Contact Us
          </span>
        </Link>
      </li>

      <li>
        <Link href="/cart">
          <span
            className={`nav-link ${
              pathname === "/cart"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center"
            }`}
          >
            <CartShop />
          </span>
        </Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
    toast.success("Log out successfully");
  };
  return (
    <div>
      <div className="w-full fixed z-50 navbar h-[70px] bg-[#000C21] text-white flex justify-between items-center">
        <div className="flex-none lg:hidden">
          <label
            for="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 justify-end lg:justify-start items-center">
          <li className="lg:hidden">
            <Link href="/cart">
              <span
                className={`nav-link ${
                  pathname === "/cart"
                    ? "active"
                    : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center"
                }`}
              >
                <CartShop />
              </span>
            </Link>
          </li>
          <Link href={"/"}>
            <Image
              className="w-20 ml-7 cursor-pointer hover:scale-110 delay-150 duration-300 ease-in-out"
              src={logo}
              alt="logo"
              width={500}
              height={500}
            ></Image>
          </Link>
        </div>
        <div class="flex-none items-center justify-center hidden lg:block">
          <ul class="menu menu-horizontal flex items-center">
            {/* <!-- Navbar menu content here --> */}
            {links}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="relative group">
                  {user?.photoURL ? (
                    <Image
                      src={user?.photoURL}
                      width={500}
                      height={500}
                      className="size-[50px] bg-slate-500 object-cover rounded-full border-[2px] border-blue-600"
                      alt="avatar navigate ui"
                    />
                  ) : (
                    <Image
                      src={avatar}
                      width={500}
                      height={500}
                      className="size-[50px] bg-slate-500 object-cover rounded-full border-[2px] border-blue-600"
                      alt="avatar navigate ui"
                    />
                  )}
                  {user && (
                    <>
                      <span className="size-3 bg-green-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                      <span className="size-3 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
                    </>
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] py-1 xl:py-2  space-y-3 px-4 bg-[#202074] text-white shadow menu menu-sm dropdown-content hover:bg-[#010313] hover:text-blue-300   rounded-md w-60"
              >
                <h2
                  data-aos="flip-up"
                  className="text-xs text-purple-600 font-bold"
                >
                  {user ? user?.displayName : "User Not Available"}
                </h2>
                <hr className="border-gray-600" />
                <Link className="hover:font-bold flex items-center" href={"/"}>
                  <span className="mr-1">
                    <FaHome />
                  </span>
                  Home
                </Link>
                {user ? (
                  <>
                    <hr className="border-gray-600" />
                    <Link
                      className="hover:font-bold flex items-center"
                      href={"/dashboard/myProfile"}
                    >
                      <span className="mr-1">
                        <BiSolidDashboard />
                      </span>
                      Dashboard
                    </Link>
                  </>
                ) : (
                  ""
                )}
                <hr className="border-gray-600" />
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="hover:font-bold flex items-center text-left"
                  >
                    <span className="mr-1">
                      <BiLogOut />
                    </span>
                    Logout
                  </button>
                ) : (
                  <Link
                    className="hover:font-bold flex items-center"
                    href={"/signIn"}
                  >
                    <span className="mr-1">
                      <MdLogin />
                    </span>
                    Login
                  </Link>
                )}
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
