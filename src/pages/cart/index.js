import React from "react";
import TitlePage from "components/titlePage";
import Button from "components/button";
import { useSelector } from "react-redux";
import CartItem from "./cartItem";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "components/container";
import { cartItemsTotalSelector } from "redux-toolkit/cart/selectors";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  const cartItemsTotal = useSelector(cartItemsTotalSelector);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
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
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => {
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
                  {cartItemsTotal}
                </span>
              </div>
              <p className="text-base italic">
                Shipping, taxes, and discounts will be calculated at checkout.
              </p>
              <div className="flex gap-x-2">
                <Button onClick={() => navigate("/shop")}>
                  Continue shopping
                </Button>
                {cartItems.length > 0 && (
                  <Button onClick={() => navigate("/checkout")}>
                    Check Out
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
