"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/components/ui/use-outside-click";
import { MdDelete } from "react-icons/md";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import toast from "react-hot-toast";
import Link from "next/link";

export function ItemCard({ cards, refetch }) {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();
  const publicAxios = usePublicAxios();

  const handleDelete = async (id) => {
    try {
      const res = await publicAxios.delete(`/carts/${id}`);
      if (res.data.deletedCount > 0) {
        toast.success("Item removed from the cart");
        refetch();
      } else {
        toast.error("Failed to remove the item");
      }
    } catch (error) {
      console.error("Error deleting cart item:", error);
      toast.error("An error occurred while removing the item.");
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

      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={`card-${card.productName}-${id}`}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-[#010313] rounded-xl cursor-pointer"
          >
            <div className="flex items-center gap-4 flex-col md:flex-row ">
              <motion.h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox bg-white border-orange-600 checkbox-xs"
                />
              </motion.h3>
              <motion.div>
                <Image
                  width={240}
                  height={240}
                  src={card?.productImage}
                  alt={card.productName}
                  className="w-40 h-16 md:h-16 md:w-16 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="space-y-0.5">
                <Link href={`/shop/${card?._id}`}>
                  <motion.h3 className="font-medium cursor-pointer hover:text-blue-700 text-neutral-800 dark:text-neutral-200 text-center md:text-left">
                    {card?.productName}
                  </motion.h3>
                </Link>
                <motion.p className="text-purple-600 text-sm text-center md:text-left">
                  {card?.productPrice}
                </motion.p>
                <motion.p className="text-neutral-600 text-xs dark:text-neutral-400 text-center md:text-left">
                  {card?.time}
                </motion.p>
              </div>
            </div>
            <motion.button
              onClick={() => handleDelete(card?._id)}
              className="px-2 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              <MdDelete className="text-orange-800" />
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
