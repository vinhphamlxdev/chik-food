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
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  phonenumber: yup.number().required("Please enter your phone number"),
  address: yup.string().required("Please enter your address"),
});
const Checkout = () => {
  const { cartList } = useSelector((state) => state.global);
  const priceShipping = 2000;
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const totalCoin = cartList.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  const handleCheckout = async (values) => {
    if (!isValid) return;
    console.log(values);
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
  return (
    <div>
      <TitlePage title="Checkout" subTitle="Checkout" />
      <div className="wrapper-layout">
        <form
          onSubmit={handleSubmit(handleCheckout)}
          autoComplete="off"
          className="grid grid-cols-2 my-10 gap-x-3"
        >
          <div className="flex flex-col">
            <h3 className="mb-10 text-xl font-medium">Contact information</h3>
            <div className="flex flex-col ">
              <Field>
                <Input
                  type="text"
                  name="fullname"
                  placeholder="Enter your fullname"
                  control={control}
                />
              </Field>
              <Field>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  control={control}
                />
              </Field>
              <Field>
                <Input
                  type="number"
                  name="phonenumber"
                  placeholder="Phone number"
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
            </div>
          </div>
          <div className="flex bg-[#fafafa] py-5 pl-5 pr-3 flex-col">
            <div className="checkout-list py-3 pr-3  flex flex-col gap-y-4 h-[350px] has-scrollbar">
              {cartList.map((item) => {
                const { id, title, productImage, price, quantity } = item;
                return (
                  <div
                    key={id}
                    className="flex items-center px-1 py-2 bg-white border-b border-gray-300 rounded-md"
                  >
                    <div className="relative">
                      <div className="relative overflow-hidden bg-white border border-gray-300 rounded-md w-14 h-14">
                        <img
                          className="object-cover w-full rounded-md"
                          src={productImage[0]}
                          alt=""
                        />
                      </div>
                      <span className="absolute -top-[10px] -right-2 w-5 h-5 flex justify-center items-center text-sm font-light leading-[0] text-white bg-gray-600 rounded-full ">
                        {quantity}
                      </span>
                    </div>
                    <div className="flex items-center justify-between w-full pl-4">
                      <div className="relative ">
                        <span className="text-base font-normal text-textPrimary">
                          {title}
                        </span>
                        <p className="text-xs font-light text-textColor">
                          L / Juicy / Spicy
                        </p>
                      </div>
                      <span className="text-sm font-light text-textPrimary">
                        ${price * quantity}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="py-5 border-t border-b border-gray-300 place-order">
              <div className="flex justify-between mb-3">
                <span className="text-sm font-light text-textColor">
                  Subtotal
                </span>
                <p className="text-sm font-normal text-textPrimary">
                  ${totalCoin}
                </p>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-light text-textColor">
                  Shipping
                </span>
                <p className="text-sm font-normal text-textPrimary">
                  ${priceShipping}
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-5 ">
              <span className="text-sm font-light text-textColor">Total</span>
              <p className="text-lg font-normal text-textPrimary">
                ${(totalCoin + priceShipping).toLocaleString()}
              </p>
            </div>
            <div className="flex justify-end mt-5 text-right">
              <Button
                isLoading={isSubmitting}
                disabled={isSubmitting}
                height="50px"
                type="submit"
              >
                Place Order
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
