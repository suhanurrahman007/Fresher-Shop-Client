import { BsFillQuestionOctagonFill } from "react-icons/bs";
import UserChart from "../UserChart/UserChart";

const OrderReport = () => {
    return (
      <div
        className="p-4 bg-[#0D0D21] shadow-lg shadow-blue-950 h-44 rounded-md m-0"
      >
        <div className="flex items-center gap-2 mb-0">
          <h2 className="text-md font-semibold">Total Customers</h2>
          <BsFillQuestionOctagonFill
            className="text-gray-500 text-md cursor-pointer"
            title="Total number of customers this month"
          />
        </div>
        <div className="flex justify-between  items-center p-0">
          <div className="m-0 space-y-3">
            <h1 className="text-5xl text-purple-200 font-bold">$47K</h1>
            <button
              className="badge badge-primary badge-outline disabled cursor-not-allowed py-2 px-4"
              title="Growth compared to last month"
            >
              +3.5%
            </button>
          </div>
          <div className="m-0 p-0">
            <UserChart />
          </div>
        </div>
      </div>
    );
};

export default OrderReport;