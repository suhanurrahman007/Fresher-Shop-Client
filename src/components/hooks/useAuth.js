"use client";

import { AuthContext } from "@/app/providers/AuthProvider";
import { useContext } from "react";

const useAuth = () => {
  const authUtils = useContext(AuthContext);
  if (!authUtils) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authUtils;
};

export default useAuth;