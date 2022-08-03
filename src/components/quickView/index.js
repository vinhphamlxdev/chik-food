import Button from "components/button";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "redux-toolkit/global/globalSlice";
import styled from "styled-components";
const StyledQuickView = styled.div`
  width: 100%;
  height: 100%;
  inset: 0;
  position: fixed;
  z-index: 999999;
  & .modal-quickview {
    background-color: ${(props) => props.theme.bgModal};
    will-change: scroll-position;
    scroll-behavior: smooth;
    overflow: hidden overlay;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &:hover::-webkit-scrollbar {
      width: 6px;
      display: inline-block;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background: #ccc;
    }
    & .btn-type {
      padding: 16px;
      border: 1px solid #e4e4e4;
      line-height: 0;
      &:hover {
        border: 1px solid ${(props) => props.theme.primary};
      }
    }
    .quickview-header {
      width: 150px;
      font-size: 13px;
      font-weight: 600;
    }
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
    .close-modal {
      color: ${(props) => props.theme.textPrimary};
    }
  }
`;
const QuickView = ({ data = [] }) => {
  const dispatch = useDispatch();
  const { showModal } = useSelector((state) => state.global);
  console.log(showModal);
  const handleCloseModal = () => {
    dispatch(setShowModal(false));
  };

  if (typeof document === "undefined")
    return <div className="modal-biography"></div>;
  return ReactDOM.createPortal(
    <StyledQuickView className={`flex ${showModal ? "" : "hidden"}`}>
      <div
        onClick={handleCloseModal}
        className="absolute inset-0 z-20 bg-black opacity-60 overlay "
      ></div>
      <div className="w-[1000px] rounded-[8px] overflow-hidden h-[600px] relative z-50 max-h-full inset-0 m-auto modal-quickview p-4">
        <button
          onClick={handleCloseModal}
          className="absolute text-2xl close-modal top-4 right-4"
        >
          <i className="transition-all duration-500 text-inherit hover:text-primary bi bi-x-lg"></i>
        </button>

        <div className="grid grid-cols-2 gap-x-5">
          <div className="flex flex-col">
            <div className="relative max-h-[500px]">
              <img
                src="https://cdn.shopify.com/s/files/1/0016/3387/8116/products/product14_95afe317-8b68-45cd-9c84-e69826158a07_grande.jpg"
                alt=""
              />
            </div>
            <div className="flex justify-start gap-x-4">
              <div className="relative cursor-pointer">
                <img
                  src="https://cdn.shopify.com/s/files/1/0016/3387/8116/products/product14_95afe317-8b68-45cd-9c84-e69826158a07_medium.jpg"
                  alt=""
                />
              </div>
              <div className="relative cursor-pointer">
                <img
                  src="https://cdn.shopify.com/s/files/1/0016/3387/8116/products/product6_medium.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col quickview-desc">
            <h3 className="mb-4 quickview-title text-[27px]">
              Party Meal Grill
            </h3>
            <p className="mb-5 text-[13px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor...
            </p>
            <div className="flex items-center mb-4 ">
              <p className="text-base font-semibold quickview-header">
                Effective Price :
              </p>
              <h2 className="text-sm font-semibold">$529.00</h2>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-base font-semibold quickview-header">
                Availability:
              </p>
              <span className="text-sm font-normal text-secondary">
                Many In Stock
              </span>
            </div>
            <div className="flex flex-col mt-5 gap-y-5">
              <div className="flex items-center">
                <h3 className="text-sm font-normal quickview-header">Type</h3>
                <button className="btn-type">Juicy</button>
              </div>
              <div className="flex items-center">
                <h3 className="quickview-header">Quantity</h3>
                <div className="flex items-center">
                  <div className="btn-dec">-</div>
                  <input
                    className="quickview-quantity"
                    type="number"
                    value={1}
                  />
                  <div className="btn-inc">+</div>
                </div>
              </div>
              <div className="flex items-center">
                <h3 className="quickview-header">Subtotal:</h3>
                <h2 className="text-sm font-semibold">$1,090.00</h2>
              </div>
              <div className="flex justify-start mt-4">
                <Button className="font-bold">ADD TO CART</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledQuickView>,
    document.querySelector("body")
  );
};

export default QuickView;
