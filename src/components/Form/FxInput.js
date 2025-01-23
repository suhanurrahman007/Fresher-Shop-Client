"use client";

import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

export default function FXInput({
  variant = "bordered",
  size = "sm",
  required = false,
  type = "text",
  label,
  name,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      {...register(name)}
      errorMessage={errors[name] ? (errors[name].message) : ""}
      isInvalid={!!errors[name]}
      variant={variant}
      size={size}
      required={required}
      type={type}
      label={label}
    />
  );
}