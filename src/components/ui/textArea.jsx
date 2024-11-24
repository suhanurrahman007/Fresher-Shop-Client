"use client";

import * as React from "react";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { cn } from "./utils/cn";

const TextArea = React.forwardRef(({ className, ...props }, ref) => {
  const radius = 100; // Adjusts the radius of the hover effect
  const [visible, setVisible] = React.useState(false);

  // Motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Updates motion values on mouse movement
  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${
              visible ? `${radius}px` : "0px"
            } circle at ${mouseX}px ${mouseY}px,
            var(--blue-500),
            transparent 80%
          )
        `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition-all duration-300 group/textarea"
    >
      <textarea
        className={cn(
          `flex w-full h-20 rounded-md bg-[#000C21] text-white shadow-input px-3 py-2 text-sm
          placeholder:text-neutral-400 dark:placeholder:text-neutral-600 border-none
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600
          disabled:cursor-not-allowed disabled:opacity-50
          group-hover/textarea:shadow-none transition duration-400`,
          className
        )}
        ref={ref}
        {...props}
      />
    </motion.div>
  );
});

TextArea.displayName = "TextArea";

export { TextArea };
