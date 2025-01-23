"use client";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";


export default function FXForm({
  children,
  onSubmit,
  defaultValues,
  resolver,
}) {
  const formConfig = {};

  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const submitHandler = methods.handleSubmit;

  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandler(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
