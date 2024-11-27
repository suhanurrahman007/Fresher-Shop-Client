"use client";
import { GoTriangleRight } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";
import Link from "next/link";
import useLatestPosts from "@/components/hooks/useLatestPosts";
import usePosts from "@/components/hooks/usePosts";
import {
  FaCommentDots,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import profileImg from "@/assets/avatar.png";
import useAuth from "@/components/hooks/useAuth";
import toast from "react-hot-toast";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import { useForm } from "react-hook-form";
import useComments from "@/components/hooks/useComments";
import DarkCalendar from "@/components/share/Calendar/Calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CommentCard } from "./CommentCard";
import { BottomGradient, LabelInputContainer } from "@/components/ui/LabelInputContainer";

const BlogDetails = ({ params }) => {
  const publicAxios = usePublicAxios();

  const [posts] = usePosts();
  const [latestPosts] = useLatestPosts();

  const { user } = useAuth();

  const [comments, refetch] = useComments();
  const findPost = posts?.find((item) => item?._id === params?.postId) || {};
  const filterComments =
    comments?.filter((item) => item?.postId === params?.postId) || [];

  console.log(filterComments);

  const [value, onChange] = useState(new Date());

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const commentInfo = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
      comment: data?.comment,
      postId: params?.postId,
      like: 0
    };
    console.log(commentInfo);

    const res = await publicAxios.post("/comments", commentInfo);
    // console.log(res.data);
    if (res.data.insertedId) {
      toast.success("Successfully Post here");
      refetch();
    }
  };
  return (
    <div className="max-w-[2520px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mx-auto lg:px-20 md:px-10 sm:px-2 px-4 py-28 ">
      <div className="lg:col-span-2 space-y-10">
        <div>
          <div className="">
            <h2 className="text-2xl font-bold text-white text-justify">
              {findPost?.title}
            </h2>
            <p className="text-sm text-gray-400 text-justify mt-2 my-4">
              {findPost?.time} <span className="px-2">|</span>{" "}
              <span>{filterComments?.length} Comments</span>
            </p>
            <Image
              className="w-full h-96"
              src={findPost?.image}
              alt="findPost"
              height={20}
              width={600}
            ></Image>
            <p className="text-sm text-justify text-gray-400 py-7">
              {findPost?.description}
            </p>

            <p className="text-sm text-justify text-gray-400 ">
              {" "}
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.Ut tristique pretium tellus, sed
              fermentum est vestibulum id.Aenean semper, odio sed fringilla
              blandit, nisl nulla placerat mauris, sit amet commodo mi turpis at
              libero.Curabitur varius eros et lacus rutrum consequat.Mauris
              sollicitudin enim condimentum, luctus justo non, molestie
              nisl.Aenean et egestas nulla.Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas.Fusce
              gravida, ligula non molestie tristique, justo elit blandit risus,
              blandit maximus augue magna accumsan ante.Aliquam bibendum lacus
              quis nulla dignissim faucibus.Sed mauris enim, bibendum at purus
              aliquet, maximus molestie tortor.Sed faucibus et tellus eu
              sollicitudin.Sed fringilla malesuada luctus.
            </p>

            <div className="flex justify-between py-10">
              <div className="space-y-2">
                <p className="text-sm text-blue-600">
                  Tags:{" "}
                  <span className="text-gray-400 ml-1">{findPost?.tag}</span>
                </p>
                <p className="text-sm text-blue-600">
                  Categories:{" "}
                  <span className="text-gray-400 ml-1">
                    {findPost?.category}
                  </span>
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <FaFacebook className="text-blue-600 text-3xl transform hover:scale-110 transition-transform duration-300" />
                <FaInstagram className="text-pink-600 text-3xl transform hover:scale-110 transition-transform duration-300" />
                <FaTwitter className="text-blue-400 text-3xl transform hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          </div>
          <div className="hero bg-[#000C21]">
            <div className="hero-content">
              {user?.photoURL ? (
                <Image
                  className="rounded-sm"
                  src={user?.photoURL}
                  alt="images"
                  width={110}
                  height={110}
                ></Image>
              ) : (
                <Image
                  className="rounded-sm"
                  src={profileImg}
                  alt="images"
                  width={110}
                  height={110}
                ></Image>
              )}
              <div className="space-y-2">
                <p className="text-gray-500 font-semibold text-sm">About</p>
                <p className="text-xs cursor-pointer text-justify hover:text-blue-600 font-bold">
                  {user?.displayName}
                </p>
                <p className="text-xs text-justify text-gray-400">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Ut tristique pretium
                  tellus, sed fermentum est vestibulum id.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-gray-800 mt-10" />

          <div>
            <h2 className="text-3xl font-bold text-gray-700 text-center py-7">
              {" "}
              <span>{filterComments?.length}</span> Comments Here
            </h2>

            <div>
              {filterComments.length == 0 ? (
                <div className="text-md space-y-3  flex flex-col justify-center items-center text-gray-500 font-bold">
                  <span className="text-black text-3xl">
                    <FaCommentDots></FaCommentDots>
                  </span>
                  <h2>No Comments in This Post</h2>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-5">
                  <CommentCard cards={filterComments} refetch={refetch} />
                </div>
              )}
            </div>
          </div>

          <hr className="border-gray-800 mt-10" />

          <div>
            <h2 className="text-3xl font-bold text-white text-center py-7">
              Add Comment
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body shadow-lg bg-black"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
                <div className="form-control">
                  <LabelInputContainer>
                    <Label htmlFor="name">
                      Name <span className="text-red-700">*</span>
                    </Label>
                    <Input
                      type="text"
                      defaultValue={user?.displayName}
                      disabled
                    />
                  </LabelInputContainer>
                </div>
                <div className="form-control">
                  <LabelInputContainer>
                    <Label htmlFor="email">
                      Email <span className="text-red-700">*</span>
                    </Label>
                    <Input type="text" defaultValue={user?.email} disabled />
                  </LabelInputContainer>
                </div>
              </div>

              <div className="form-control mt-5">
                <LabelInputContainer>
                  <Label htmlFor="comment">
                    Comment <span className="text-red-700">*</span>
                  </Label>
                  <textarea
                    type="text"
                    {...register("comment", { required: true })}
                    placeholder="Enter your Comment"
                    className="input bg-[#000C21] input-bordered placeholder:text-sm h-40 "
                  />
                </LabelInputContainer>
              </div>

              <div className="form-control mt-6">
                <button
                  className="bg-gradient-to-br relative group/btn from-blue-900 to-blue-900  block bg-blue-800 w-full text-white rounded-md h-10 font-medium,0px_-1px_0px_0px_#ffffff40_inset] shadow-[0px_1px_0px_0px_var(--blue-800)_inset,0px_-1px_0px_0px_var(--blue-800)_inset]"
                  type="submit"
                >
                  Comment &rarr;
                  <BottomGradient />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="lg:col-span-1 bg-[#000C21] w-full mt-7 px-8 py-6 space-y-5 rounded-md">
        <div>
          <h2 className="py-5 text-2xl text-white font-bold">Search</h2>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered bg-[#010313] border-blue-950 w-full rounded-full h-11 placeholder:text-sm md:w-auto"
            />
            <button className="-ml-11 text-xl rounded-full p-3 hover:bg-blue-500">
              <IoSearchOutline></IoSearchOutline>
            </button>
          </div>
        </div>
        <div>
          <h2 className="py-5 text-2xl text-white font-bold">Category</h2>
          <div className="space-y-3">
            <div className="flex items-center text-justify text-sm">
              <p className="text-blue-600 text-lg">
                <GoTriangleRight></GoTriangleRight>
              </p>
              <p className="cursor-pointer text-gray-400 hover:text-blue-600">
                Air Cargo News
              </p>
            </div>

            <div className="flex items-center text-justify text-sm">
              <p className="text-blue-600 text-lg">
                <GoTriangleRight></GoTriangleRight>
              </p>
              <p className="cursor-pointer text-gray-400 hover:text-blue-600">
                Air Cargo News
              </p>
            </div>

            <div className="flex items-center text-justify text-sm">
              <p className="text-blue-600 text-lg">
                <GoTriangleRight></GoTriangleRight>
              </p>
              <p className="cursor-pointer text-gray-400 hover:text-blue-600">
                Distribution/Materials
              </p>
            </div>

            <div className="flex items-center text-justify text-sm">
              <p className="text-blue-600 text-lg">
                <GoTriangleRight></GoTriangleRight>
              </p>
              <p className="cursor-pointer text-gray-400 hover:text-blue-600">
                Logistics Planner
              </p>
            </div>

            <div className="flex items-center text-justify text-sm">
              <p className="text-blue-600 text-lg">
                <GoTriangleRight></GoTriangleRight>
              </p>
              <p className="cursor-pointer text-gray-400 hover:text-blue-600">
                Supply Chain Research
              </p>
            </div>

            <div className="flex items-center text-justify text-sm">
              <p className="text-blue-600 text-lg">
                <GoTriangleRight></GoTriangleRight>
              </p>
              <p className="cursor-pointer text-gray-400 hover:text-blue-600">
                Transport Digest
              </p>
            </div>

            <div className="flex items-center text-justify text-sm">
              <p className="text-blue-600 text-lg">
                <GoTriangleRight></GoTriangleRight>
              </p>
              <p className="cursor-pointer text-gray-400 hover:text-blue-600">
                Worl Expert Insight
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="py-5 text-2xl text-white font-bold">Calendar</h2>

          <DarkCalendar />
        </div>

        <div>
          <h2 className="py-5 text-2xl text-white font-bold">Latest Posts</h2>
          {latestPosts?.map((item) => (
            <div key={item?._id}>
              <div className="hero">
                <div className="hero-content">
                  <Image
                    className="rounded-sm w-24 h-14"
                    src={item?.image}
                    alt="images"
                    width={110}
                    height={110}
                  ></Image>
                  <div className="">
                    <Link
                      href={`/blog/${item?._id}`}
                      className="text-xs cursor-pointer text-justify hover:text-blue-600 font-bold"
                    >
                      {item?.title}
                    </Link>
                    <p className="text-xs text-justify text-gray-400">
                      {item?.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="py-5 text-2xl text-white font-bold">Popular Tags</h2>
          <div className="bg-[#010313] grid grid-cols-2 gap-4 p-4 rounded-sm">
            <Link
              href={`/blog`}
              className="bg-blue-800 hover:text-white hover:bg-purple-700 text-white font-bold py-3 w-full px-8 text-xs rounded-full"
            >
              Electric
            </Link>

            <Link
              href={`/blog`}
              className="bg-blue-800 hover:text-white hover:bg-purple-700 text-white font-bold py-3 w-full px-8 text-xs rounded-full"
            >
              Logistics
            </Link>

            <Link
              href={`/blog`}
              className="bg-blue-800 hover:text-white hover:bg-purple-700 text-white font-bold py-3 w-full px-8 text-xs rounded-full"
            >
              Heating
            </Link>

            <Link
              href={`/blog`}
              className="bg-blue-800 hover:text-white hover:bg-purple-700 text-white font-bold py-3 w-full px-8 text-xs rounded-full"
            >
              Ideas
            </Link>

            <Link
              href={`/blog`}
              className="bg-blue-800 hover:text-white hover:bg-purple-700 text-white font-bold py-3 w-full px-8 text-xs rounded-full"
            >
              Interior
            </Link>

            <Link
              href={`/blog`}
              className="bg-blue-800 hover:text-white hover:bg-purple-700 text-white font-bold py-3 w-full px-8 text-xs rounded-full"
            >
              Repair
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
