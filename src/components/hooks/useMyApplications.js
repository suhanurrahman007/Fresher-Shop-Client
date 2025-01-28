"use client";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import usePublicAxios from "./usePublicAxios";

const useMyApplications = () => {
  const publicAxios = usePublicAxios();
  const { user } = useAuth();
  const { refetch, data: myApplications = [] } = useQuery({
    queryKey: ["myApplications", user?.email],
    queryFn: async () => {
      const res = await publicAxios.get(`/job?email=${user?.email}`, {
        cache: "no-store",
      });
      return res?.data;
    },
  });
  return [myApplications, refetch];
};

export default useMyApplications;
