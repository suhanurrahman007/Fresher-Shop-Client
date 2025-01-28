import Image from "next/image";
import avatar from "@/assets/avatar.png";
import useOrder from "@/components/hooks/useOrder";
const TopProductCard = () => {
  const [order, refetch] = useOrder();

  return (
    <div data-aos="zoom-in-up">
      <div className="overflow-x-auto">
        <table className="w-full shadow-md mx-auto my-6">
          <tbody>
            {order?.map((item) => (
              <tr
                key={item?._id}
                className="hover:bg-[#020517] transition duration-300"
              >
                <td className="border-b p-2 border-b-gray-800">
                  <div className="flex items-center gap-4">
                    {/* User Image */}
                    <div>
                      <Image
                        width={500}
                        height={500}
                        className="size-9 rounded-full bg-slate-500 object-cover"
                        src={item?.productImage}
                        alt={item?.productName || "User avatar"}
                        onError={(e) => (e.target.src = avatar)}
                      />
                    </div>

                    {/* User Details */}
                    <div className="space-y-1 flex justify-center items-center gap-3 mr-9">
                      <h2 className="text-sm hover:underline hover:text-blue-700 font-medium text-gray-900 dark:text-gray-100">
                        {item?.productName?.split(" ").slice(0, 2).join(" ")}
                      </h2>
                      <p className="badge text-xs badge-primary badge-outline">
                        35%
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-xs px-3 border-b border-b-gray-800">
                  {/* {item?.productPrice?.toFixed(2)} */}
                  4.5
                </td>
                <td className="py-4 px-3 text-xs border-b border-b-gray-800">
                  <progress
                    className="progress progress-info w-24 bg-gray-800"
                    value="50"
                    max="100"
                  ></progress>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProductCard;
