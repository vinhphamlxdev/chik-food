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
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { LoadingSpinner } from "components/loading";
import Swal from "sweetalert2";

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
    if (!isValid) return;
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
      photoURL:
        "https://tse4.mm.bing.net/th?id=OIP.KA_Smqj-RFt3q8YLTa2BaQHaHa&pid=Api&P=0",
    });

    await setDoc(doc(db, "users", auth.currentUser.uid), {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
      avatar:
        "https://tse4.mm.bing.net/th?id=OIP.KA_Smqj-RFt3q8YLTa2BaQHaHa&pid=Api&P=0",
    });

    Swal.fire({
      position: "center",
      icon: "success",
      text: "Create user successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };
  useEffect(() => {
    const arrErroes = Object.values(errors);
    if (arrErroes.length > 0) {
      toast.error(arrErroes[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  useEffect(() => {
    document.title = "Register Page";
  }, []);
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
            <Button
              isLoading={isSubmitting}
              disabled={isSubmitting}
              height="50px"
              type="submit"
              className="w-full py-[10px]"
            >
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
