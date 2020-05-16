import React from "react";
import { useForm } from "react-hook-form";
import RegisterForm from "../../components/RegisterForm";
import { FormData } from "./interfaces";
import registerSchema from "./validation";

const Register = () => {
  const { register, handleSubmit, errors, setError } = useForm({
    validationSchema: registerSchema,
  });

  const submit = (data: FormData) => {
    console.log(data);
    // make an auth request and use setError to handle errors from there
  };

  return (
    <RegisterForm
      onSubmit={submit}
      register={register}
      formHandleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default Register;
