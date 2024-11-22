import { FaCommentDots } from "react-icons/fa";
import Image from "next/image"; // Import Image from next/image if you're using Next.js
import { ItemCard } from "./ItemCard";

export default function ItemCart({ myCart, refetch }) {
  return (
    <div>
      {myCart?.length === 0 ? (
        <div className="text-md space-y-3 flex flex-col justify-center items-center text-gray-500 font-bold">
          <span className="text-black text-3xl">
            <FaCommentDots />
          </span>
          <h2>No Add Cart in This Products</h2>
        </div>
      ) : (
        <div className="">
          <ItemCard cards={myCart} refetch={refetch} />
        </div>
      )}
    </div>
  );
}
