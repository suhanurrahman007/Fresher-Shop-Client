"use client";
import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useCart = () => {
  const publicAxios = usePublicAxios();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await publicAxios.get(`/carts`);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCart;
