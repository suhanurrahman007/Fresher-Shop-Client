import Image from "next/image";
import avatar from "@/assets/avatar.png";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import toast from "react-hot-toast";
import ReturnProduct from "./ReturnProduct";
import { MdCancel } from "react-icons/md";
const MyOrderManagement = ({ orders, refetch }) => {
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
              <th className="py-3 px-3 text-left">Return</th>
              <th className="py-3 px-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((item) => (
              <tr
                data-aos="zoom-in-up"
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
                  <ReturnProduct refetch={refetch} orderReturn={item} />
                </td>

                <td className="py-4 px-3 border-b border-b-gray-800">
                  <button
                    onClick={() => handleDelete(item?._id)}
                    aria-label={`Delete user ${item.name}`}
                    className="flex items-center justify-end gap-1 text-red-600 hover:text-green-600 transition-all duration-300"
                  >
                    <MdCancel className="text-base " />
                    <span className="hidden md:inline text-xs font-semibold">
                      Cancel
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
