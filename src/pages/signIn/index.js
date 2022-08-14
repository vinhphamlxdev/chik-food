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
import { db, auth } from "firebase-app/firebase-config";
import InputPasswordToggle from "components/input/InputPasswordToggle";
import Button from "components/button";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "redux-toolkit/global/globalSlice";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.global);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      dispatch(setUserInfo(user));
      if (!userInfo) navigate("/sign-up");
      else navigate("/");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSignIn = async (values) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, values.email, values.password);
    navigate("/");
  };
  useEffect(() => {
    const arrErrores = Object.values(errors);
    if (arrErrores.length > 0) {
      toast.error(arrErrores[0]?.message);
    }
  }, [errors]);
  useEffect(() => {
    if (userInfo?.email) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  return (
    <Container>
      <TitlePage title="Create Account" subTitle="Create Account" />
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
          </form>
        </div>
      </div>
    </Container>
  );
};

export default SignIn;
