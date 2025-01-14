import { FaTrashAlt, FaUser } from "react-icons/fa";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import toast from "react-hot-toast";
const DeliveryBoyManagement = ({ deliveryBoy, refetch }) => {
  const publicAxios = usePublicAxios();

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div
          style={{
            padding: "20px",
            background: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            width: "300px",
          }}
        >
          <p style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>
            Are you sure you want to delete this user?
          </p>
          <div
            style={{
              marginTop: "15px",
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <button
              style={{
                padding: "10px 15px",
                fontSize: "14px",
                color: "#fff",
                backgroundColor: "#28a745",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
              onClick={() => {
                publicAxios
                  .delete(`/job/${id}`)
                  .then((res) => {
                    if (res.data.deletedCount > 0) {
                      toast.success("Order deleted successfully", {
                        duration: 3000,
                      });
                      refetch();
                    } else {
                      toast.error("Failed to delete Order", { duration: 3000 });
                    }
                  })
                  .catch(() => {
                    toast.error("An error occurred while deleting the Order", {
                      duration: 3000,
                    });
                  });
                toast.dismiss(t.id);
              }}
            >
              Yes, Delete
            </button>
            <button
              style={{
                padding: "10px 15px",
                fontSize: "14px",
                color: "#fff",
                backgroundColor: "#dc3545",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#c82333")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { id: "confirm-toast" }
    );
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full shadow-md mx-auto my-6">
          <thead>
            <tr className="bg-[#0D0D21] text-purple-400">
              <th className="py-3 px-3 text-start">User</th>
              <th className="py-3 px-3 text-left">Phone Number</th>
              <th className="py-3 px-3 text-left">Address</th>
              <th className="py-3 px-3 text-left">Role</th>
              <th className="py-3 px-3 text-left">Create At</th>
              <th className="py-3 px-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {deliveryBoy?.map((item) => (
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
                <td className="py-4 text-xs px-3 border-b border-b-gray-800">
                  {item?.phone}
                </td>
                <td className="py-4 text-xs text-blue-600 font-extrabold px-3 border-b border-b-gray-800">
                  {item?.address?.split(" ").slice(0, 2).join(" ")}
                </td>
                <td className="py-4 text-xs px-3 text-green-300 border-b border-b-gray-800">
                  {item?.role}
                </td>
                <td className="py-4 px-3 text-xs border-b border-b-gray-800">
                  {new Date(item?.time).toLocaleString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour12: true,
                  })}
                </td>
                <td className="py-4 px-3 border-b border-b-gray-800">
                  <button
                    onClick={() => handleDelete(item?._id)}
                    aria-label={`Delete user ${item.name}`}
                    className="flex items-center justify-end gap-2 text-red-600 hover:text-green-600 transition-all duration-300"
                  >
                    <FaTrashAlt className="text-base " />
                    <span className="hidden md:inline text-xs font-semibold">
                      Delete
                    </span>
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

export default DeliveryBoyManagement;
