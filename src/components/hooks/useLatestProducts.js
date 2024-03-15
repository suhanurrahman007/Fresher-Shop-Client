import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useLatestProducts = () => {
  const publicAxios = usePublicAxios();
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(0);

  const { refetch, data: latestProducts = [] } = useQuery({
    queryKey: ["latestProducts"],
    queryFn: async () => {
      const res = await publicAxios.get(
        `/products?page=${currentPage}&size=${itemsPerPage}`
      );
      return res.data;
    },
  });

  return [latestProducts, refetch];
};

export default useLatestProducts;
