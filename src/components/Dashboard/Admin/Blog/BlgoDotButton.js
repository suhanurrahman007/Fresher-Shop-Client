import usePublicAxios from "@/components/hooks/usePublicAxios";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsThreeDots } from "react-icons/bs";
import { FaTrash, FaEdit, FaEye, FaCopy } from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";

export default function BlogDotButton({ blogId, refetch }) {
  const [openModal, setOpenModal] = useState(false);
  const publicAxios = usePublicAxios();

  const handleDelete = async (id) => {
    const res = await publicAxios.delete(`/posts/${id}`);
    if (res.data.deletedCount > 0) {
      toast.success("Post Delete Successfully");
      refetch();
      setOpenModal(false); 
    }
  };

  const blogUrl = `${window.location.origin}/blog/${blogId}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(blogUrl).then(
      () => {
        toast.success("Link copied to clipboard!");
      },
      () => {
        toast.error("Failed to copy the link.");
      }
    );
  };

  return (
    <div className="relative mx-auto w-fit">
      {/* Dots Button */}
      <button onClick={() => setOpenModal(!openModal)}>
        <BsThreeDots size={24} />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed inset-0 z-[100] grid place-items-center bg-black/40 backdrop-blur-sm duration-200 ${
          openModal ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Modal Content */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative w-80 rounded-xl bg-[#0D0D21] p-8 shadow-2xl ${
            openModal
              ? "scale-100 opacity-100 duration-300"
              : "scale-90 opacity-0 duration-150"
          }`}
        >
          {/* Close Button */}
          <svg
            onClick={() => setOpenModal(false)}
            className="absolute right-3 top-3 w-6 cursor-pointer fill-gray-400 hover:fill-gray-200"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
          </svg>
          {/* Share Buttons */}
          <div className="flex justify-center items-center flex-wrap gap-3">
            <FacebookShareButton url={blogUrl}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={blogUrl}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton url={blogUrl}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <LinkedinShareButton url={blogUrl}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <button
              onClick={handleCopyLink}
              className="flex items-center justify-center w-9 h-9 bg-gray-700 text-white rounded-full hover:bg-gray-950"
            >
              <FaCopy />
            </button>
          </div>
          <hr className="my-4 border-t-1 border-gray-800" />
          {/* Modal Buttons */}
          <div className="flex flex-col gap-3 mt-6">
            <button
              onClick={() => handleDelete(blogId)}
              className="flex items-center gap-3 rounded-md bg-gradient-to-r from-red-950 to-red-800 px-4 py-2 text-sm font-semibold text-white shadow-md hover:from-red-800 hover:to-red-600"
            >
              <FaTrash />
              Delete Blog
            </button>
            <Link
              href={`/dashboard/blogManage/${blogId}`}
              className="flex items-center gap-3 rounded-md bg-gradient-to-r from-blue-950 to-blue-800 px-4 py-2 text-sm font-semibold text-white shadow-md hover:from-blue-800 hover:to-blue-600"
            >
              <FaEdit />
              Update Blog
            </Link>

            <Link
              href={`/blog/${blogId}`}
              className="flex items-center gap-3 rounded-md bg-gradient-to-r from-purple-950 to-purple-800 px-4 py-2 text-sm font-semibold text-white shadow-md hover:from-purple-800 hover:to-purple-600"
            >
              <FaEye />
              View Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
