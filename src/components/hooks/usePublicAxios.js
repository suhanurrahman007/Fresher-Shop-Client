"use client";

import axios from "axios";

export const instance = axios.create({
  baseURL: "https://freshershopserver.vercel.app",
  // baseURL: "http://localhost:5000",
});

const usePublicAxios = () => {
  return instance;
};

export default usePublicAxios;
