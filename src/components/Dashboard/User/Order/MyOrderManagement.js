import Image from "next/image";
import avatar from "@/assets/avatar.png";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import toast from "react-hot-toast";
import { MdPadding } from "react-icons/md";
import { RiPassPendingFill } from "react-icons/ri";
const MyOrderManagement = ({ orders, refetch }) => {
  const publicAxios = usePublicAxios();

  const handleMakeOrder = (item) => {
    publicAxios.patch(`/order/${item._id}`, { status: "Delivered" }); // Corrected URL and data object
    publicAxios.put(`/order/${item._id}`, { payment: "Paid" })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Order Delivered successfully"); // Improved success message
          refetch(); // Call to update the data
        }
      })
      .catch((err) => {
        toast.error("Failed to Delivered the order"); // Handle errors gracefully
        console.error(err);
      });
  };

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
                  .delete(`/order/${id}`)
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
              <th className="py-3 px-3 text-left">Price</th>
              <th className="py-3 px-3 text-left">Payment</th>
              <th className="py-3 px-3 text-left">Address</th>
              <th className="py-3 px-3 text-left">Phone</th>
              <th className="py-3 px-3 text-left">Status</th>
              <th className="py-3 px-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((item) => (
              <tr
                key={item?._id}
                className="hover:bg-[#0D0D21] transition duration-300"
              >
                <td className="py-2 px-3 border-b border-b-gray-800">
                  <div className="flex items-center gap-4">
                    {/* User Image */}
                    <div>
                      <Image
                        width={500}
                        height={500}
                        className="size-10 rounded-full bg-slate-500 object-cover"
                        src={item?.productImage}
                        alt={item?.productName || "User avatar"}
                        onError={(e) => (e.target.src = avatar)}
                      />
                    </div>

                    {/* User Details */}
                    <div className="space-y-1">
                      <h2 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {item?.productName?.split(" ").slice(0, 2).join(" ")}
                      </h2>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {item?.phone}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-xs px-3 border-b border-b-gray-800">
                  {item?.productPrice?.toFixed(2)}
                </td>
                {item?.payment === "Paid" ? (
                  <td className="py-4 text-xs text-green-600 font-extrabold px-3 border-b border-b-gray-800">
                    {item?.payment}
                  </td>
                ) : (
                  <td className="py-4 text-xs text-blue-600 font-extrabold px-3 border-b border-b-gray-800">
                    {item?.payment}
                  </td>
                )}
                <td className="py-4 text-xs px-3 border-b border-b-gray-800">
                  {item?.area?.split(" ").slice(0, 1).join(" ")}
                </td>
                <td className="py-4 px-3 text-xs border-b border-b-gray-800">
                  {item?.phone}
                </td>
                <td className="py-4 px-3 border-b border-b-gray-800">
                  {item?.status === "Delivered" ? (
                    <span className="flex items-center w-28 gap-2 rounded-full border border-green-800 px-3 py-0.5 text-xs font-semibold text-green-800 bg-green-200 shadow-md">
                      <RiPassPendingFill className="text-base" />
                      {item?.status}
                    </span>
                  ) : (
                    <button
                      onClick={() => handleMakeOrder(item)}
                      aria-label={`Make ${item.name} an order`}
                      className="flex items-center gap-2 w-28 rounded-full border border-blue-600 px-3 py-0.5 text-xs font-semibold text-blue-600 bg-blue-300 shadow-md hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-all duration-300"
                    >
                      <MdPadding className="text-base" />
                      {item?.status}
                    </button>
                  )}
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

export default MyOrderManagement;
