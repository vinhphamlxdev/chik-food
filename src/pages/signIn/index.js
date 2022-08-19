import React, { useEffect } from "react";
import Container from "components/container";
import { Field } from "components/field";
import { Label } from "components/label";
import TitlePage from "components/titlePage";
import { Input } from "components/input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "firebase-app/firebase-config";
import InputPasswordToggle from "components/input/InputPasswordToggle";
import Button from "components/button";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "contexts/auth-context";
import Swal from "sweetalert2";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});

const SignIn = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    const arrErroes = Object.values(errors);
    if (arrErroes.length > 0) {
      toast.error(arrErroes[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  const { userInfo } = useAuth();
  console.log(userInfo);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Login Page";
    if (userInfo?.email) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  const handleSignIn = async (values) => {
    if (!isValid) return;
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      Swal.fire({
        icon: "success",
        text: "Log in Successfully",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      if (
        error.message.includes("wrong-password") ||
        error.message.includes("user-not-found")
      )
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "It seems your password was wrong!",
        });
    }
  };
  return (
    <Container>
      <TitlePage title="Account" subTitle="Account" />
      <div className="my-10 wrapper-layout">
        <div className="flex justify-center w-full">
          <form
            className="form w-[350px] "
            onSubmit={handleSubmit(handleSignIn)}
            autoComplete="off"
          >
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
              <InputPasswordToggle control={control}></InputPasswordToggle>
            </Field>
            <Button
              isLoading={isSubmitting}
              disabled={isSubmitting}
              height="50px"
              type="submit"
              className="w-full py-[10px]"
            >
              Sign In
            </Button>
            <div className="mt-5 text-center create-account hover:text-primary">
              <NavLink
                className="text-base font-light underline hover:text-primary text-textColor"
                to="/sign-up"
              >
                Create account
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default SignIn;
