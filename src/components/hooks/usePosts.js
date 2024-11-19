"use client";
import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const usePosts = () => {
  const publicAxios = usePublicAxios();
  const { refetch, data: posts = [] } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await publicAxios.get(`/posts`);
      return res.data;
    },
  });

  return [posts, refetch];
};

export default usePosts;
