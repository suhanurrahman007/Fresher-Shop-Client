import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: "https://fresher-shop-server.vercel.app",
});

const usePublicAxios = () => {
  return instance;
};

export default usePublicAxios;
