import React from "react";
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
const SetQuantity = ({
  value = 1,
  handleDec = () => {},
  handleInc = () => {},
}) => {
  return (
    <StyledSetQuan className="flex items-center">
      <div onClick={handleDec} className="select-none btn-dec">
        -
      </div>
      <div className="quickview-quantity">{value}</div>

      <div onClick={handleInc} className="select-none btn-inc">
        +
      </div>
    </StyledSetQuan>
  );
};

export default SetQuantity;
