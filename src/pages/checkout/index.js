import React from "react";
import TitlePage from "components/titlePage";
import { Field } from "components/field";
import { Label } from "components/label";
import { Input } from "components/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  phonenumber: yup.string().required("Please enter your phone number"),
});

const Checkout = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleCheckout = async () => {};
  return (
    <>
      <TitlePage title="Checkout" subTitle="Checkout" />
      <div className="wrapper-layout">
        <div className="grid grid-cols-2 my-10 gap-x-3">
          <div className="flex flex-col">
            <h3 className="mb-10 text-xl font-medium">Contact information</h3>
            <form onSubmit={handleSubmit(handleCheckout)} autoComplete="off">
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
                <Label htmlFor="phoneNumber">Phone number</Label>
                <Input
                  type="text"
                  name="phonenumber"
                  placeholder="Enter your phone number"
                  control={control}
                />
              </Field>
              <Field>
                <Label htmlFor="addRess">Address</Label>
                <Input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  control={control}
                />
              </Field>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
