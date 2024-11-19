"use client";
import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";
import { useState } from "react";

const useLatestPosts = () => {
  const publicAxios = usePublicAxios();
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  const { refetch, data: latestPosts = [] } = useQuery({
    queryKey: ["latestPosts"],
    queryFn: async () => {
      const res = await publicAxios.get(
        `/posts?page=${currentPage}&size=${itemsPerPage}`
      );
      return res.data;
    },
  });

  return [latestPosts, refetch];
};

export default useLatestPosts;
