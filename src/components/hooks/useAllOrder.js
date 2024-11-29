"use client";
import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useAllOrder = () => {
  const publicAxios = usePublicAxios();
  const { refetch, data: allOrder = [] } = useQuery({
    queryKey: ["AllOrder"],
    queryFn: async () => {
      const res = await publicAxios.get(`/order`, {
        cache: "no-store",
      });
      return res.data;
    },
  });

  return [allOrder, refetch];
};

export default useAllOrder;
