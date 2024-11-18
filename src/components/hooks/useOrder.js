"use client";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import usePublicAxios from "./usePublicAxios";

const useOrder = () => {
  const publicAxios = usePublicAxios();
  const { user } = useAuth();
  const { refetch, data: order = [] } = useQuery({
    queryKey: ["order", user?.email],
    queryFn: async () => {
      const res = await publicAxios.get(`/order?email=${user.email}`, {
        cache: "no-store",
      });
      return res.data;
    },
  });
  console.log(order);

  return [order, refetch];
};

export default useOrder;
