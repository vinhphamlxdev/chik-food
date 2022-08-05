import React from "react";
import SetQuantity from "components/setQuantity";
import styled from "styled-components";
const StyledCartItem = styled.div`
  border-bottom: 1px solid #e4e4e4;
  border-left: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
`;

const CartItem = () => {
  return (
    <StyledCartItem className="flex cart-row">
      <div className="flex w-5/12 gap-x-1">
        <div className="relative cursor-pointer">
          <img
            src="https://cdn.shopify.com/s/files/1/0016/3387/8116/products/product20_aa431d91-a34d-42ce-bcda-bbf038ea432d_medium.jpg?v=1542609828"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h5 className="text-lg font-semibold transition-all duration-500 cursor-pointer hover:text-primary">
            3 piece Crunchy
          </h5>
          <p>L / Crunchy / Spicy</p>
        </div>
      </div>
      <div className="grid w-full grid-cols-4 gap-x-3">
        <div className="text-lg font-semibold flex-center text-primary">
          $218.00
        </div>
        <div className="flex-center">
          <SetQuantity />
        </div>
        <div className="text-lg font-semibold flex-center text-primary">
          $218.00
        </div>
        <div className="flex-center">
          <i class="transition-all font-semibold cursor-pointer duration-500 text-xl hover:text-primary bi bi-trash"></i>
        </div>
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
