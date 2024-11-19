import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useProducts = () => {
  const publicAxios = usePublicAxios();
  const { refetch, data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await publicAxios.get(`/products`);
      return res?.data;
    },
  });

  return [products, refetch, isLoading];
};

export default useProducts;
