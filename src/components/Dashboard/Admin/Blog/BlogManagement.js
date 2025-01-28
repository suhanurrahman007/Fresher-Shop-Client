import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import DotButton from "./BlgoDotButton";
import BlogDotButton from "./BlgoDotButton";

const BlogManagement = ({ posts, refetch }) => {
  console.log(posts);
  return (
    <div>
      <div className="overflow-x-auto ">
        <table className="w-full shadow-md  mx-auto  my-6">
          <thead className="">
            <tr className="bg-[#0D0D21] text-purple-400">
              <th className="py-3 px-6 text-left">Post</th>
              <th className="py-3 px-6 text-left">Author</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Post Category</th>
              <th className="py-3 px-6  text-left">Create At</th>
              <th className="py-3 px-6  text-left"></th>
            </tr>
          </thead>
          <tbody>
            {posts?.map((item) => (
              <tr
                data-aos="zoom-in"
                key={item?._id}
                className="hover:bg-[#0D0D21] transition duration-300"
              >
                <td className="py-2 px-6 border-b border-b-gray-800">
                  <div className="flex items-center gap-4">
                    {/* Product Image */}
                    <div>
                      <Image
                        width={500}
                        height={500}
                        className="size-10 rounded-full bg-slate-500 object-cover"
                        src={item?.image}
                        alt="avatar navigate ui"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="space-y-1">
                      <h2 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {item?.title?.split(" ").slice(0, 2).join(" ")}
                      </h2>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {item?.tag}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="py-4 px-6 border-b border-b-gray-800">
                  {item?.name?.split(" ").slice(0, 2).join(" ")}
                </td>
                <td className="py-4 px-6 border-b border-b-gray-800">
                  {item?.status ? item?.status : "Default"}
                </td>
                <td className="py-4 px-6 border-b border-b-gray-800">
                  {item?.category?.split(" ").slice(0, 1).join(" ")}
                </td>
                <td className="py-4 px-6 border-b border-b-gray-800">
                  {new Date(item?.time).toLocaleString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </td>
                <td className="py-4 px-6 border-b border-b-gray-800 text-end">
                  <BlogDotButton blogId={item?._id} refetch={refetch} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogManagement;
