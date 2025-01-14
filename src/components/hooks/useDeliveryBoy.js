"use client";
import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useDeliveryBoy = () => {
  const publicAxios = usePublicAxios();
  const { refetch, data: deliveryBoy = [] } = useQuery({
    queryKey: ["deliveryBoy"],
    queryFn: async () => {
      const res = await publicAxios.get(`/job`);
      const filteredData = res.data.filter(
        (item) => item.role === "delivery boy"
      );
      return filteredData;
    },
  });

  return [deliveryBoy, refetch];
};

export default useDeliveryBoy;
