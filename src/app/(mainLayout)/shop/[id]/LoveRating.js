import { useState } from "react";
import RatingComment from "./RatingComment";

export default function LoveRating({ findProduct, ratingsRefetch }) {
  const [userRating, setUserRating] = useState(1); // Stores the selected star rating
  const [openModal, setOpenModal] = useState(false); // Manages modal visibility

  const handleStarClick = (star) => {
    setUserRating(star);
    setOpenModal(true);
  };

  return (
    <div data-aos="zoom-out-up" className="relative flex flex-col space-y-4">
      {/* Star Ratings */}
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            onClick={() => handleStarClick(star)}
            className="w-7 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
              fill={star <= userRating ? "#38BDF8" : "#94a3b8"} // Highlight stars based on user selection
            />
          </svg>
        ))}
      </div>

      {/* Modal */}
      {openModal && (
        <div
          onClick={() => setOpenModal(false)}
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm transition-opacity duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()} // Prevents modal close on click inside
            className="relative max-w-xl rounded-lg bg-[#010313] shadow-lg dark:text-white transition-transform duration-200"
          >
            <svg
              onClick={() => setOpenModal(false)}
              className="absolute right-3 top-3 w-6 cursor-pointer fill-zinc-600 dark:fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
            </svg>
            <RatingComment
              userRating={userRating}
              findProduct={findProduct}
              setOpenModal={setOpenModal}
              ratingsRefetch={ratingsRefetch}
            />
          </div>
        </div>
      )}
    </div>
  );
}
