"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { useOutsideClick } from "@/components/ui/use-outside-click";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns"; // Import additional utilities

export function CommentCard({ cards, refetch }) {
  const [likes, setLikes] = useState({});
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();
  const publicAxios = usePublicAxios();

  useEffect(() => {
    // Initialize likes state with values from the cards
    const initialLikes = {};
    cards.forEach((card) => {
      initialLikes[card._id] = card.like || 0;
    });
    setLikes(initialLikes);
  }, [cards]);

  const handleDelete = async (id) => {
    try {
      const res = await publicAxios.delete(`/comments/${id}`);
      if (res.data.deletedCount > 0) {
        toast.success("Comment deleted successfully");
        refetch();
      } else {
        toast.error("Failed to remove the comment");
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
      toast.error("An error occurred while removing the comment.");
    }
  };

  const handleLike = async (id, currentLike) => {
    try {
      // Increment the like count by 1
      const updatedLike = currentLike + 1;

      const response = await publicAxios.put(`/comments/${id}`, {
        updatedLike, // Send the updated like count with the correct key
      });
      console.log(response.data);
      toast.success("Comment liked successfully!");
      refetch(); // Re-fetch the comments to update the UI
    } catch (error) {
      console.error("Error liking comment:", error);
      toast.error("An error occurred while liking the comment.");
    }
  };

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  // Function to format the time in "1m", "1d", "1w", "1y"
  const formatTimeAgo = (time) => {
    const now = new Date();
    const commentTime = new Date(time);

    const years = differenceInYears(now, commentTime);
    const months = differenceInMonths(now, commentTime);
    const days = differenceInDays(now, commentTime);

    if (years >= 1) {
      return `${years}y`;
    }
    if (months >= 1) {
      return `${months}m`;
    }
    if (days >= 7) {
      return `${Math.floor(days / 7)}w`;
    }
    if (days >= 1) {
      return `${days}d`;
    }
    const minutes = Math.floor((now - commentTime) / 60000); // Get the difference in minutes
    return minutes < 1 ? "Just now" : `${minutes}m`;
  };

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <ul className="max-w-2xl mx-auto w-full gap-4 space-y-3">
        {cards?.map((card) => (
          <motion.div
            key={`card-${card.name}-${id}`}
            className="p-3 bg-[#010313] flex flex-row justify-between hover:bg-neutral-50 dark:hover:bg-[#000C21] rounded-lg cursor-pointer"
          >
            <div className="flex gap-4 flex-row ">
              <motion.div>
                <Image
                  width={240}
                  height={240}
                  src={card?.image}
                  alt={card.name}
                  className="w-10 h-10 md:h-10 md:w-10 rounded-full object-cover object-top"
                />
              </motion.div>
              <div className="space-y-1">
                <motion.h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-left">
                  {card?.name}
                </motion.h3>
                <motion.p className="text-purple-600 text-xs text-left">
                  {card?.comment}
                </motion.p>
                <div className="flex gap-3 items-center">
                  {/* Format time using the custom formatTimeAgo function */}
                  <motion.p className="text-neutral-600 text-xs hover:underline dark:text-neutral-400 text-left">
                    {card?.time ? formatTimeAgo(card.time) : "Just now"}
                  </motion.p>
                  <motion.button
                    onClick={() => handleLike(card?._id, card?.like)}
                    className="text-neutral-600 text-xs font-bold hover:underline dark:text-neutral-400 text-left"
                  >
                    Like
                  </motion.button>
                  <motion.button
                    onClick={() => handleDelete(card?._id)}
                    className="text-neutral-600 text-xs font-bold hover:underline dark:text-neutral-400 text-left"
                  >
                    Delete
                  </motion.button>
                  <motion.p className="text-neutral-600 text-xs font-extrabold dark:text-neutral-400 text-left">
                    {card?.like}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}
