"use client";

import axios from "axios";

export const instance = axios.create({
  baseURL: "https://freshershopserver.vercel.app",
});

const usePublicAxios = () => {
  return instance;
};

export default usePublicAxios;
