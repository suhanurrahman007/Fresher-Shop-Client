import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useAllUser = () => {
  const publicAxios = usePublicAxios();
  const {
    refetch,
    data: allUser = [],
    isLoading,
  } = useQuery({
    queryKey: ["AllUser"],
    queryFn: async () => {
      const res = await publicAxios.get(`/users`);
      return res?.data;
    },
  });

  return [allUser, refetch, isLoading];
};

export default useAllUser;
