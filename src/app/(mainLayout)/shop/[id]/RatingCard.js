"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import InsidePercentageProgress from "./InsidePercentageProgress";
import DarkCalendar from "@/components/share/Calendar/Calendar";
import LatestSelect from "./LatestSelect";

const RatingCard = ({ ratingsRefetch, filterRatings }) => {
  const [likes, setLikes] = useState({});
  const publicAxios = usePublicAxios();

  const totalReviews = filterRatings?.length || 0;

  const averageRating =
    filterRatings?.reduce((acc, item) => acc + item.rating, 0) /
    filterRatings.length;



  const starCounts = {
    5: filterRatings?.filter((item) => item.rating === 5).length || 0,
    4: filterRatings?.filter((item) => item.rating === 4).length || 0,
    3: filterRatings?.filter((item) => item.rating === 3).length || 0,
    2: filterRatings?.filter((item) => item.rating === 2).length || 0,
    1: filterRatings?.filter((item) => item.rating === 1).length || 0,
  };

  const starPercentages = Object.keys(starCounts).reduce((acc, star) => {
    acc[star] = totalReviews ? (starCounts[star] / totalReviews) * 100 : 0;
    return acc;
  }, {});

  useEffect(() => {
    const initialLikes = {};
    filterRatings.forEach((card) => {
      initialLikes[card._id] = card.like || 0;
    });
    setLikes(initialLikes);
  }, [filterRatings]);

  const handleLike = async (id, currentLike) => {
    try {
      const updatedLike = currentLike + 1;
      await publicAxios.put(`/ratings/${id}`, { updatedLike });
      toast.success("Comment liked successfully!");
      ratingsRefetch();
    } catch (error) {
      toast.error("An error occurred while liking the comment.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await publicAxios.delete(`/ratings/${id}`);
      if (res.data.deletedCount > 0) {
        toast.success("Comment deleted successfully");
        ratingsRefetch();
      } else {
        toast.error("Failed to remove the comment");
      }
    } catch (error) {
      toast.error("An error occurred while removing the comment.");
    }
  };

  const formatTimeAgo = (time) => {
    const now = new Date();
    const commentTime = new Date(time);

    const years = differenceInYears(now, commentTime);
    const months = differenceInMonths(now, commentTime);
    const days = differenceInDays(now, commentTime);

    if (years >= 1) return `${years}y`;
    if (months >= 1) return `${months}m`;
    if (days >= 7) return `${Math.floor(days / 7)}w`;
    if (days >= 1) return `${days}d`;

    const minutes = Math.floor((now - commentTime) / 60000);
    return minutes < 1 ? "Just now" : `${minutes}m`;
  };

  return (
    <div className="lg:flex gap-5 max-w-[2520px] text-white lg:px-16 md:px-8 sm:px-2 px-4">
      {/* Left: Review List */}
      <div className="lg:w-2/3">
        <LatestSelect />
        <hr className="border-neutral-900 my-3" />
        <ul className="w-full space-y-3">
          {filterRatings?.map((card, index) => (
            <React.Fragment key={card._id}>
              {index !== 0 && <hr className="border-neutral-900 my-3" />}
              <motion.div className="p-3 bg-[#010313] flex justify-between rounded-md hover:bg-[#000C21]">
                <div className="flex gap-4">
                  <Image
                    width={240}
                    height={240}
                    src={card?.image}
                    alt={card.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="max-w-2xl space-y-1">
                    <h3 className="font-medium text-neutral-200">
                      {card?.name}
                    </h3>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-3.5 mb-2"
                          fill={star <= card?.rating ? "#F2B00A" : "#94a3b8"}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 .587l3.668 7.42L23.6 9.3l-5.683 5.54L19.6 23.6 12 19.825 4.4 23.6l1.683-8.76L.4 9.3l7.933-1.293L12 .587z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-purple-600 text-xs">{card?.comment}</p>
                    <div className="flex items-center gap-3">
                      <p className="text-neutral-600 text-xs">
                        {card?.time ? formatTimeAgo(card.time) : "Just now"}
                      </p>
                      <button
                        onClick={() => handleLike(card._id, card?.like)}
                        className="text-neutral-600 text-xs font-bold"
                      >
                        Like
                      </button>
                      <button
                        onClick={() => handleDelete(card._id)}
                        className="text-neutral-600 text-xs font-bold"
                      >
                        Delete
                      </button>
                      <p className="text-neutral-600 text-xs">
                        {likes[card._id] || card?.like}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </ul>
      </div>

      {/* Right: Rating Statistics */}
      <div className="lg:w-1/3 p-5 space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-6 mb-2"
                fill={star <= averageRating ? "#F2B00A" : "#94a3b8"}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .587l3.668 7.42L23.6 9.3l-5.683 5.54L19.6 23.6 12 19.825 4.4 23.6l1.683-8.76L.4 9.3l7.933-1.293L12 .587z" />
              </svg>
            ))}
          </div>
          <h1 className="font-bold text-xl">{averageRating.toFixed(1)}</h1>
        </div>
        <hr className="border-neutral-900 my-3 pb-4" />
        {Object.entries(starCounts)
          .sort(([starA], [starB]) => Number(starB) - Number(starA)) // Sort by stars in descending order
          .map(([star, count]) => (
            <div key={star} className="flex gap-3 items-center">
              <p className="text-gray-500 flex">{star}★</p>
              <InsidePercentageProgress percentage={starPercentages[star]} />
              <p className="font-bold text-gray-400">{count}</p>
            </div>
          ))}
        <div className="pt-4">
          <DarkCalendar />
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
