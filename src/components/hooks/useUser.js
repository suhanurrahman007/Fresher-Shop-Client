"use client";

import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";
import useAuth from "./useAuth";

const useUser = () => {
  const publicAxios = usePublicAxios();
  const { user } = useAuth();
  const { data: users = [] } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await publicAxios.get(`/users?email=${user?.email}`);
      return res.data;
    },
  });

  return users;
};

export default useUser;
