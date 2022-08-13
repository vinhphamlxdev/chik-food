import React from "react";
import Container from "components/container";
import { Field } from "components/field";
import { Label } from "components/label";
import TitlePage from "components/titlePage";
import { Input } from "components/input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSignUp = async (values) => {};
  return (
    <Container>
      <TitlePage title="Create Account" subTitle="Create Account" />
      <div className="my-10 wrapper-layout">
        <div className="flex justify-center w-full">
          <form
            className="form w-[350px] "
            onSubmit={handleSubmit(handleSignUp)}
            autoComplete="off"
          >
            <Field>
              <Label htmlFor="fullname">Fullname</Label>
              <Input
                type="text"
                name="fullname"
                placeholder="Enter your fullname"
                control={control}
              />
            </Field>
            <Field>
              <Label htmlFor="email">Email address</Label>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                control={control}
              />
            </Field>
            <Field>
              <Label htmlFor="password">Password</Label>
            </Field>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
