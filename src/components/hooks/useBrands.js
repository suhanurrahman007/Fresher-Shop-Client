"use client";
import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useBrands = () => {
  const publicAxios = usePublicAxios();
  const { refetch, data: brands = [] } = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const res = await publicAxios.get(`/brands`);
      return res.data;
    },
  });

  return [brands, refetch];
};

export default useBrands;
