"use client";
import Link from "next/link";
import {
  FaBoxOpen,
  FaBriefcase,
  FaFirstOrder,
  FaHome,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdRateReview } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { VscThreeBars } from "react-icons/vsc";
import { FaJediOrder } from "react-icons/fa";
import logo from "@/assets/Logo.png";
import { FaSignsPost } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import "@/components/share/Navbar/Dashboard.css";
import useAuth from "@/components/hooks/useAuth";
import Image from "next/image";
import useUser from "@/components/hooks/useUser";
import AdminFooter from "@/components/Dashboard/Admin/AdminProfile/ActiveUser/AdminFooter";

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();

  const [users] = useUser();
  const pathname = usePathname();

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
    toast.success("Log out successfully");
  };

  const UserSidebarLinks = (
    <>
      <li>
        <Link href="/dashboard/myProfile">
          <span
            span
            className={`nav-link ${
              pathname === "/dashboard/myProfile"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
            }`}
          >
            <CgProfile className="text-purple-600"></CgProfile>My Profile
          </span>
        </Link>
      </li>
      <li>
        <Link href="/dashboard/paymentHistory">
          <span
            className={`nav-link ${
              pathname === "/dashboard/paymentHistory"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
            }`}
          >
            <MdWorkHistory className="text-purple-600"></MdWorkHistory>
            Payment History
          </span>
        </Link>
      </li>

      <li>
        <Link Link href="/dashboard/myOrder">
          <span
            className={`nav-link ${
              pathname === "/dashboard/myOrder"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
            }`}
          >
            <FaJediOrder className="text-purple-600"></FaJediOrder>
            My Order
          </span>
        </Link>
      </li>
      <li>
        <Link href="/dashboard/job">
          <span
            className={`nav-link ${
              pathname === "/dashboard/job"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
            }`}
          >
            <MdRateReview className="text-purple-600"></MdRateReview>
            Job Apply Delivery Boy
          </span>
        </Link>
      </li>
    </>
  );

  const AdminSidebarLinks = (
    <>
      <li>
        <Link href="/dashboard/adminProfile">
          <span
            span
            className={`nav-link ${
              pathname === "/dashboard/adminProfile"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
            }`}
          >
            <CgProfile className="text-purple-600"></CgProfile>
            Admin Profile
          </span>
        </Link>
      </li>

      <li>
        <Link href="/dashboard/usersManage">
          <span
            className={`nav-link ${
              pathname === "/dashboard/usersManage"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
            }`}
          >
            <FaUsers className="text-purple-600"></FaUsers>
            Users Manage
          </span>
        </Link>
      </li>

      <li>
        <Link href="/dashboard/productManage">
          <span
            className={`nav-link ${
              pathname === "/dashboard/productManage"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
            }`}
          >
            <FaBoxOpen className="text-purple-600"></FaBoxOpen>
            Product Manage
          </span>
        </Link>
      </li>
      <li>
        <Link href="/dashboard/blogManage">
          <span
            className={`nav-link ${
              pathname === "/dashboard/blogManage"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
            }`}
          >
            <FaSignsPost className="text-purple-600"></FaSignsPost>
            Blog Manage
          </span>
        </Link>
      </li>
      <li>
        <Link href="/dashboard/orderManage">
          <span
            className={`nav-link ${
              pathname === "/dashboard/orderManage"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
            }`}
          >
            <FaFirstOrder className="text-purple-600"></FaFirstOrder>
            Orders Manage
          </span>
        </Link>
      </li>

      <li>
        <Link href="/dashboard/deliveryBoy">
          <span
            className={`nav-link ${
              pathname === "/dashboard/deliveryBoy"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
            }`}
          >
            <FaUser className="text-purple-600"></FaUser>
            Delivery Boy
          </span>
        </Link>
      </li>

      <li>
        <Link href="/dashboard/application">
          <span
            className={`nav-link ${
              pathname === "/dashboard/application"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
            }`}
          >
            {" "}
            <FaBriefcase className="text-purple-600"></FaBriefcase>
            Job Application Manage
          </span>
        </Link>
      </li>

      <li>
        <Link href="/dashboard/returnOrder">
          <span
            className={`nav-link ${
              pathname === "/dashboard/returnOrder"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
            }`}
          >
            <GiReturnArrow className="text-purple-600" />
            Return Order
          </span>
        </Link>
      </li>
    </>
  );

  const deliverySidebarLinks = (
    <>
      <li>
        <Link href="/dashboard/deliveryMenProfile">
          <span
            span
            className={`nav-link ${
              pathname === "/dashboard/deliveryMenProfile"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
            }`}
          >
            <CgProfile className="text-purple-600"></CgProfile>Delivery Men
            Profile
          </span>
        </Link>
      </li>

      <li>
        <Link href="/dashboard/manageReturn">
          <span
            span
            className={`nav-link ${
              pathname === "/dashboard/manageReturn"
                ? "active"
                : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
            }`}
          >
            <CgProfile className="text-purple-600"></CgProfile>Manage Return
          </span>
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="bg-[#0D0D21] flex justify-between items-center py-3 px-5 lg:hidden">
            <label
              htmlFor="my-drawer-2"
              className="btn w-20 bg-[#0D0D21] border-none  text-white drawer-button lg:hidden"
            >
              <span className="text-2xl">
                <VscThreeBars></VscThreeBars>
              </span>
            </label>
            <Link
              href={"/"}
              className="btn btn-ghost normal-case items-center text-xs md:text-xl"
            >
              <Image
                className="w-20 ml-7 cursor-pointer hover:scale-110 delay-150 duration-300 ease-in-out"
                src={logo}
                alt="logo"
                width={500}
                height={500}
              ></Image>
            </Link>
          </div>
          {/* Page content here */}
          {children}
          <AdminFooter />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu w-64 min-h-full sticky overflow-y-auto text-white bg-[#0D0D21] flex justify-between">
            {/* Sidebar content here */}
            <div>
              <div>
                <Link href={"/"} className="flex justify-center items-center">
                  <span className="w-40 ml-14 mt-4 cursor-pointer">
                    <Image
                      src={logo}
                      alt="logo"
                      width={100}
                      height={100}
                    ></Image>
                  </span>
                </Link>
              </div>
              <div className="divider"></div>
              <div>{UserSidebarLinks}</div>
              <div className="divider"></div>
              {users?.role === "admin" ? AdminSidebarLinks : ""}
              <div className="divider"></div>
              {users?.role === "admin" ? deliverySidebarLinks : ""}
              <div className="divider"></div>
            </div>
            <div>
              <li>
                <Link href="/">
                  <span
                    span
                    className={`nav-link ${
                      pathname === "/"
                        ? "active"
                        : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
                    }`}
                  >
                    <FaHome className="text-purple-600"></FaHome>Home
                  </span>
                </Link>
              </li>
              <li className="">
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
                  >
                    <span>
                      <BiLogOut className="text-purple-600"></BiLogOut>
                    </span>
                    Logout
                  </button>
                ) : (
                  <Link
                    className="rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
                    href={"/signIn"}
                  >
                    <span className="">
                      <MdLogin className="text-purple-600"></MdLogin>
                    </span>
                    Login
                  </Link>
                )}
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
