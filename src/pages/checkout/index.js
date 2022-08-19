import React from "react";
import TitlePage from "components/titlePage";
import { Field } from "components/field";
import { Label } from "components/label";
import { Input } from "components/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Checkbox } from "components/checkbox";
import Button from "components/button";
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
    <div>
      <TitlePage title="Checkout" subTitle="Checkout" />
      <div className="wrapper-layout">
        <div className="grid grid-cols-2 my-10 gap-x-3">
          <div className="flex flex-col">
            <h3 className="mb-10 text-xl font-medium">Contact information</h3>
            <form onSubmit={handleSubmit(handleCheckout)} autoComplete="off">
              <Field>
                <Input
                  type="text"
                  name="fullname"
                  placeholder="Fullname"
                  control={control}
                />
              </Field>
              <Field>
                <Input
                  type="text"
                  name="phonenumber"
                  placeholder="Phone number"
                  control={control}
                />
              </Field>
              <Field>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  control={control}
                />
              </Field>
              <Field>
                <Input
                  type="text"
                  name="address"
                  placeholder="Address"
                  control={control}
                />
              </Field>
            </form>
          </div>
          <div className="flex bg-[#fafafa] p-5 flex-col">
            <div className="checkout-list h-[350px] has-scrollbar">
              <div className="flex items-center">
                <div className="relative">
                  <div className="relative overflow-hidden bg-white border border-gray-300 rounded-md w-15 h-15">
                    <img
                      className="rounded-md"
                      src="https://cdn.shopify.com/s/files/1/0016/3387/8116/products/product26_small.jpg?v=1542608276"
                      alt=""
                    />
                  </div>
                  <span className="absolute -top-[10px] -right-2 w-5 h-5 flex justify-center items-center text-sm font-light leading-[0] text-white bg-gray-600 rounded-full ">
                    2
                  </span>
                </div>
                <div className="flex items-center justify-between w-full pl-4">
                  <div className="relative ">
                    <span className="text-base font-normal text-textPrimary">
                      Spicy Tandoori
                    </span>
                    <p className="text-xs font-light text-textColor">
                      L / Juicy / Spicy
                    </p>
                  </div>
                  <span className="text-xs font-light text-textPrimary">
                    $1,458.00
                  </span>
                </div>
              </div>
            </div>
            <div className="py-5 border-t border-b border-gray-300 place-order">
              <div className="flex justify-between mb-3">
                <span className="text-sm font-light text-textColor">
                  Subtotal
                </span>
                <p className="text-sm font-normal text-textPrimary">
                  $6,868.00
                </p>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-light text-textColor">
                  Shipping
                </span>
                <p className="text-sm font-normal text-textPrimary">$20.00</p>
              </div>
            </div>
            <div className="flex justify-between mt-5 ">
              <span className="text-sm font-light text-textColor">Total</span>
              <p className="text-lg font-normal text-textPrimary">$6,888.00</p>
            </div>
            <div className="flex justify-end mt-5 text-right">
              <Button>Place Order</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
