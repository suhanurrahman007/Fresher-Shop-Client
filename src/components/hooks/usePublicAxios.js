"use client";

import axios from "axios";
export const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const usePublicAxios = () => {
  return instance;
};

export default usePublicAxios;
