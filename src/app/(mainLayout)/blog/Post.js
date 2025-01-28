import useComments from "@/components/hooks/useComments";
import Aos from "aos";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Post = ({ post }) => {
  const [comments] = useComments();
 useEffect(() => {
   Aos.init({
     duration: 1000,
   });
 }, []);
  const filterComments = comments?.filter((item) => item?.postId === post?._id);

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className="">
        <h2 className="text-2xl font-bold text-white text-justify">
          {post?.title}
        </h2>
        <p className="text-sm text-gray-400 text-justify mt-2 my-4">
          {post?.time ? format(new Date(post?.time), "dd MMM yyyy") : "N/A"}{" "}
          <span className="px-2">|</span>{" "}
          <span>{filterComments?.length} Comments</span>
        </p>
        <Image
          data-aos="zoom-in-up"
          className="w-full h-96 2xl:h-[600px]"
          src={post?.image}
          alt="post"
          height={20}
          width={600}
        ></Image>
        <p className="text-sm text-justify text-gray-400 py-7">
          {post?.description?.split(" ")?.slice(0, 30)?.join(" ") +
            (post?.description?.split(" ").length > 30 ? "..." : "")}
        </p>
        <div>
          <Link
            href={`/blog/${post?._id}`}
            className="bg-blue-800 hover:bg-orange-800 text-white font-bold py-2 px-10 text-sm rounded-full"
          >
            Read more
          </Link>
        </div>
      </div>
      <hr className="border-gray-300 mt-10" />
    </div>
  );
};

export default Post;
