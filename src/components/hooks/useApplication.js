"use client";
import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useApplication = () => {
  const publicAxios = usePublicAxios();
  const { refetch, data: application = [] } = useQuery({
    queryKey: ["application"],
    queryFn: async () => {
      const res = await publicAxios.get(`/job`);
      const filteredData = res.data.filter((item) => item.role === "user");
      return filteredData;
    },
  });

  return [application, refetch];
};

export default useApplication;
