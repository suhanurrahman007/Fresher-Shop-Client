"use client";
import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useRating = () => {
  const publicAxios = usePublicAxios();
  const { refetch: ratingsRefetch, data: ratings = [] } = useQuery({
    queryKey: ["ratings"],
    queryFn: async () => {
      const res = await publicAxios.get(`/ratings`);
      return res.data;
    },
  });

  return [ratings, ratingsRefetch];
};

export default useRating;
