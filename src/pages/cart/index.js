import React from "react";
import TitlePage from "components/titlePage";
import Button from "components/button";
import { useSelector } from "react-redux";
import CartItem from "./cartItem";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartList } = useSelector((state) => state.global);
  // console.log("cart list:", cartList);
  const totalCoin = cartList.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  return (
    <>
      <TitlePage title="Your Shopping Cart" subTitle="Your Shopping Cart" />
      <div className="my-10 cart-container">
        <div className="wrapper-layout">
          <div className=" product-container">
            <div className="flex items-center py-2 bg-primary">
              <div className="w-5/12 text-base font-semibold text-center text-white">
                Product
              </div>
              <div className="grid w-full grid-cols-4 gap-x-3">
                <div className="text-base font-semibold text-center text-white">
                  Price
                </div>
                <div className="text-base font-semibold text-center text-white">
                  Quantity
                </div>
                <div className="text-base font-semibold text-center text-white">
                  Total
                </div>
                <div className="text-base font-semibold text-center text-white">
                  Remove
                </div>
              </div>
            </div>
            {cartList.length > 0 ? (
              cartList.map((item, index) => {
                return <CartItem key={index} item={item} />;
              })
            ) : (
              <div className="my-3 text-2xl font-semibold text-center text-textPrimary">
                No product in the cart
              </div>
            )}

            <div className="flex flex-col items-end mt-5 gap-y-4">
              <div className="flex items-center gap-x-2">
                <h3 className="text-lg font-medium">Subtotal :</h3>
                <span className="text-lg font-semibold text-primary">
                  {totalCoin}
                </span>
              </div>
              <p className="text-base italic">
                Shipping, taxes, and discounts will be calculated at checkout.
              </p>
              <div className="flex gap-x-2">
                <Button onClick={() => navigate("/shop")}>
                  Continue shopping
                </Button>
                <Button>Check Out</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
