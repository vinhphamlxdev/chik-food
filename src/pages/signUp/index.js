import React, { useEffect } from "react";
import Container from "components/container";
import { Field } from "components/field";
import { Label } from "components/label";
import TitlePage from "components/titlePage";
import { Input } from "components/input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db, auth } from "firebase-app/firebase-config";
import InputPasswordToggle from "components/input/InputPasswordToggle";
import Button from "components/button";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

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
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSignUp = async (values) => {
    console.log(errors);
    if (!isValid) return;
    console.log(values);
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });
    const colRef = collection(db, "users");
    await addDoc(colRef, {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    });
    swal("Create user successfully!!", {
      icon: "success",
    });
    // navigate("/");
  };
  useEffect(() => {
    const arrErrores = Object.values(errors);
    if (arrErrores.length > 0) {
      toast.error(arrErrores[0]?.message);
    }
  }, [errors]);
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
              <InputPasswordToggle control={control}></InputPasswordToggle>
            </Field>
            <Button type="submit" className="w-full py-[10px]">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
