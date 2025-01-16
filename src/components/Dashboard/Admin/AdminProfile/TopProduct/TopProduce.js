import { BsBarChartFill } from "react-icons/bs";
import TopProductCard from "./TopProductCard";
import { FaChartArea } from "react-icons/fa";

const TopProduce = () => {
  return (
    <div className="p-4 bg-[#0D0D21] shadow-lg shadow-blue-950 rounded-md">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-md font-semibold text-white">Top Product</h2>
        <FaChartArea
          className="text-purple-300 text-2xl cursor-pointer"
          title="More options"
        />
      </div>

      <div className="flex w-full justify-between items-center">
        <TopProductCard />
      </div>
    </div>
  );
};

export default TopProduce;
