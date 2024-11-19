"use client";
import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useComments = () => {
  const publicAxios = usePublicAxios();
  const { refetch, data: comments = [] } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await publicAxios.get(`/comments`);
      return res.data;
    },
  });

  return [comments, refetch];
};

export default useComments;
