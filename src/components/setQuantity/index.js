import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DecQuantity, IncQuantity } from "redux-toolkit/global/globalSlice";
import styled from "styled-components";
const StyledSetQuan = styled.div`
  .btn-inc,
  .btn-dec {
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
  .quickview-quantity {
    font-weight: 300;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    text-align: center;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
const SetQuantity = ({ quantity = 1, productId }) => {
  const dispatch = useDispatch();
  const handleDec = (id) => {
    dispatch(DecQuantity(id));
  };
  const handleInc = (id) => {
    dispatch(IncQuantity(id));
  };
  return (
    <StyledSetQuan className="flex items-center">
      <div onClick={() => handleDec(productId)} className="select-none btn-dec">
        -
      </div>
      <input
        onChange={() => {}}
        className="quickview-quantity"
        type="number"
        value={quantity}
      />
      <div onClick={() => handleInc(productId)} className="select-none btn-inc">
        +
      </div>
    </StyledSetQuan>
  );
};

export default SetQuantity;
