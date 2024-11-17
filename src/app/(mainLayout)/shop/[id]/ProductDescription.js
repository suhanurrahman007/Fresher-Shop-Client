'use client'
import { useState } from "react";

const ProductDescription = ({ findProduct }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <p className="text-xs font-semibold text-gray-400 md:text-sm">
      {showFullDescription
        ? findProduct?.description || "Description not available..."
        : findProduct?.description?.split(" ")?.slice(0, 18)?.join(" ") ||
          "Description not available..."}
      {findProduct?.description?.split(" ").length > 18 && (
        <button
          onClick={handleToggleDescription}
          className="text-blue-500 ml-1 hover:underline"
        >
          {showFullDescription ? "Read Less" : "Read More"}
        </button>
      )}
    </p>
  );
};

export default ProductDescription;
