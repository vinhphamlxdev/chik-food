import React from "react";
import SetQuantity from "components/setQuantity";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeCartItem } from "redux-toolkit/global/globalSlice";
import swal from "sweetalert";

const StyledCartItem = styled.div`
  border-bottom: 1px solid #e4e4e4;
  border-left: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
`;

const CartItem = ({ item = {} }) => {
  const dispatch = useDispatch();
  const { id, productImage = [], price, title, quantity } = item;
  const handleRemoveProduct = (productId) => {
    swal({
      title: "Are you sure?",
      text: "Bạn có chắc muốn xóa sản phẩm này?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(removeCartItem(productId));
      } else {
        return;
      }
    });
  };

  return (
    <StyledCartItem className="flex cart-row">
      <div className="flex w-5/12 gap-x-1">
        <div className="relative cursor-pointer">
          <img src={productImage[0]} alt="" />
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
          ${price}
        </div>
        <div className="flex-center">
          <SetQuantity quantity={quantity} productId={id} />
        </div>
        <div className="text-lg font-semibold flex-center text-primary">
          ${quantity * price}
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
