import { AiOutlineRadarChart } from "react-icons/ai";
import AreaCharts from "../AreaChart";
import { FaChartLine } from "react-icons/fa";

const TotalPayment = () => {
    return (
      <div
        data-aos="zoom-out-up"
        className="p-4 bg-[#0D0D21] shadow-lg shadow-blue-950 space-y-6 rounded-md"
      >
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-md font-semibold text-white">Total Payment</h2>
          <FaChartLine
            className="text-blue-300 text-2xl cursor-pointer"
            title="More options"
          />
        </div>

        <div className="flex justify-between items-center">
          <AreaCharts />
        </div>
      </div>
    );
};

export default TotalPayment;