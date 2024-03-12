"use client";
import useAuth from "@/components/hooks/useAuth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiLogOut, BiSolidDashboard } from "react-icons/bi";
import { FaBlog, FaHome, FaServicestack, FaUserTag } from "react-icons/fa";
import { MdCalculate, MdLogin } from "react-icons/md";
import "./Dashboard.css";
import Image from "next/image";
import avatar from "@/assets/avatar.png";
import toast from "react-hot-toast";
const SideNavbar = () => {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
    toast.success("Log out successfully");
  };

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
        <Link href="/about">
          <span
            className={`nav-link ${
              pathname === "/about"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center"
            }`}
          >
            <span className="mr-1">
              <FaUserTag />
            </span>
            About Us
          </span>
        </Link>
      </li>
      <li>
        <Link href="/service">
          <span
            className={`nav-link ${
              pathname === "/service"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center"
            }`}
          >
            <span className="mr-1">
              <FaServicestack />
            </span>
            Service
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
              <MdCalculate />
            </span>
            Contact Us
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
        <Link href="/dashboard/myProfile">
          <span
            className={`nav-link ${
              pathname === "/dashboard/myProfile"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center"
            }`}
          >
            <span className="mr-1">
              <BiSolidDashboard />
            </span>
            Dashboard
          </span>
        </Link>
      </li>

      {user ? (
        <li>
          <button onClick={handleLogOut}>
            <span
              className={`nav-link ${
                pathname === "/signIn"
                  ? "active"
                  : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center"
              }`}
            >
              <span className="mr-1">
                <BiLogOut />
              </span>
              LogOut
            </span>
          </button>
        </li>
      ) : (
        <li>
          <Link href="/signIn">
            <span
              className={`nav-link ${
                pathname === "/signIn"
                  ? "active"
                  : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center"
              }`}
            >
              <span className="mr-1">
                <MdLogin />
              </span>
              Login
            </span>
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="w-20 rounded-full flex justify-center items-center ml-12">
        {user?.photoURL ? (
          <div className="avatar">
            <div className="rounded-full border-[3px] border-blue-600">
              <Image
                alt="image"
                src={user?.photoURL}
                width={500}
                height={500}
              />
            </div>
          </div>
        ) : (
          <div className="rounded-full border-[3px] border-blue-600">
            <Image src={avatar} height={500} width={500} alt="avatar" />
          </div>
        )}
      </div>

      {user?.displayName ? (
        <h2 className="text-center font-bold text-xs text-purple-600 py-3 mb-5">
          {user?.displayName}
        </h2>
      ) : (
        <h2 className="text-center font-bold text-xs text-purple-600 py-3 mb-5">
          User Not Available
        </h2>
      )}
      {links}
    </div>
  );
};

export default SideNavbar;
