"use client";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import usePublicAxios from "./usePublicAxios";

const usePayment = () => {
  const publicAxios = usePublicAxios();
  const { user } = useAuth();
  const { refetch, data: payment = [] } = useQuery({
    queryKey: ["payment", user?.email],
    queryFn: async () => {
      const res = await publicAxios.get(`/payment?email=${user.email}`, {
        cache: "no-store",
      });
      return res.data;
    },
  });
  return [payment, refetch];
};

export default usePayment;
