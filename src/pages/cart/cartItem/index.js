import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { removeFromCart, setQuantity } from "redux-toolkit/cart/cartSlice";
const StyledCartItem = styled.div`
  border-bottom: 1px solid #e4e4e4;
  border-left: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
  .btn-increase,
  .btn-decrease {
    line-height: 0;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e4e4e4;
    cursor: pointer;
    text-align: center;
    width: 40px;
    height: 40px;
    transition: all 0.4s ease-in-out;
  }
  .cart-quantity {
    font-weight: 300;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    text-align: center;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
`;

const CartItem = ({ item = {} }) => {
  const dispatch = useDispatch();
  const { id, img = [], salePrice, title, quantity } = item;
  console.log("cart item:", item);
  const handleRemoveProduct = (productId) => {
    swal({
      title: "Are you sure?",
      text: "Bạn có chắc muốn xóa sản phẩm này?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(removeFromCart(productId));
      } else {
        return;
      }
    });
  };
  const updateQuantity = (type) => {
    dispatch(setQuantity({ id, type }));
  };
  return (
    <StyledCartItem className="flex cart-row">
      <div className="flex w-5/12 gap-x-1">
        <div className="relative cursor-pointer">
          <img src={img[0]} alt="" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h5 className="text-lg font-semibold transition-all duration-500 cursor-pointer whitespace-nowrap hover:text-primary">
            {title}
          </h5>
          <p>L / Crunchy / Spicy</p>
        </div>
      </div>
      <div className="grid w-full grid-cols-4 gap-x-3">
        <div className="text-lg font-semibold flex-center text-primary">
          ${salePrice}
        </div>
        <div className="flex items-center">
          <div
            onClick={() => updateQuantity("-")}
            className="select-none btn-decrease"
          >
            -
          </div>
          <div className="cart-quantity">{quantity}</div>

          <div
            onClick={() => updateQuantity("+")}
            className="select-none btn-increase"
          >
            +
          </div>
        </div>
        <div className="text-lg font-semibold flex-center text-primary">
          ${quantity * salePrice}
        </div>
        <div className="flex-center">
          <i
            onClick={() => handleRemoveProduct(id)}
            className="text-xl font-semibold transition-all duration-500 cursor-pointer hover:text-primary bi bi-trash"
          ></i>
        </div>
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
