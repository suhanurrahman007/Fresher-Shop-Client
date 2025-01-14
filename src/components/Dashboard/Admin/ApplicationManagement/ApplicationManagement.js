import usePublicAxios from "@/components/hooks/usePublicAxios";
import { ApplicationDetails } from "./ApplicationDetails";
import toast from "react-hot-toast";
const ApplicationManagement = ({ application, refetch }) => {
  const publicAxios = usePublicAxios();

  const handleAccept = (item) => {
    publicAxios.patch(`/job/${item?._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success(`${item.fullName} is a delivery boy now!`);
        refetch();
      }
    });
  };

  const handleReject = (item) => {
    publicAxios.delete(`/job/${item?._id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        toast.success(`${item.fullName} is a delivery boy Reject!`);
        refetch();
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full shadow-md mx-auto my-6">
          <thead>
            <tr className="bg-[#0D0D21] text-purple-400">
              <th className="py-3 px-3 text-start">User</th>
              <th className="py-3 px-3 text-left">Phone Number</th>
              <th className="py-3 px-3 text-left">Details</th>
              <th className="py-3 px-3 text-left">Create At</th>
              <th className="py-3 px-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {application?.map((item) => (
              <tr
                key={item?._id}
                className="hover:bg-[#0D0D21] transition duration-300"
              >
                <td className="py-2 px-3 border-b border-b-gray-800">
                  <div className="flex items-center gap-4">
                    {/* User Details */}
                    <div className="space-y-1">
                      <h2 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {item?.fullName?.split(" ").slice(0, 2).join(" ")}
                      </h2>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {item?.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-xs text-blue-600 font-extrabold px-3 border-b border-b-gray-800">
                  {item?.phone}
                </td>
                <td className="py-4 text-xs px-3 border-b border-b-gray-800">
                  <ApplicationDetails item={item} />
                </td>
                <td className="py-4 px-3 text-xs border-b border-b-gray-800">
                  {new Date(item?.time).toLocaleString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour12: true,
                  })}
                </td>
                <td className="flex lg:block py-4 px-3 border-b border-b-gray-800">
                  {item.role === "Delivery Boy" ? (
                    ""
                  ) : (
                    <button
                      onClick={() => handleAccept(item)}
                      className="group relative z-10 h-8 w-16 overflow-hidden bg-[#121325] text-sm text-green-500"
                    >
                      <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-white transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span>
                      <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-700 transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span>
                      <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-900 transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span>
                      <span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">
                        Accept
                      </span>
                      Accept
                    </button>
                  )}
                  <button
                    onClick={() => handleReject(item)}
                    className="group relative z-10 h-8 w-16 overflow-hidden bg-[#121325] text-sm text-red-600"
                  >
                    <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-white transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span>
                    <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-700 transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span>
                    <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-900 transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span>
                    <span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">
                      Reject
                    </span>
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationManagement;
