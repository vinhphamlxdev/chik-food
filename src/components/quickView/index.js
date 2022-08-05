import Button from "components/button";
import SetQuantity from "components/setQuantity";
import React, { useEffect, useState } from "react";
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

    .close-modal {
      color: ${(props) => props.theme.textPrimary};
    }
    .product-preview.active {
      border: 1px solid ${(props) => props.theme.primary};
    }
  }
`;
const QuickView = ({ data = [] }) => {
  const dispatch = useDispatch();
  const { showModal, productInfo } = useSelector((state) => state.global);
  const { productImage = [], title, price } = productInfo;
  const [currentImg, setCurrentImg] = useState("");
  useEffect(() => {
    setCurrentImg(productImage[0]);
  }, [productImage]);
  const handleCloseModal = () => {
    dispatch(setShowModal(false));
  };
  const handlePreviewProduct = (newProduct) => {
    setCurrentImg(newProduct);
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
              <img src={currentImg} alt="" />
            </div>
            <div className="flex justify-start gap-x-4">
              {productImage.map((item, index) => (
                <div
                  onClick={() => handlePreviewProduct(item)}
                  key={index}
                  className={`relative product-preview max-h-[200px] overflow-hidden cursor-pointer `}
                >
                  <img className="h-full" src={item} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col quickview-desc">
            <h3 className="mb-4 quickview-title text-[27px]">{title}</h3>
            <p className="mb-5 text-[13px] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor...
            </p>
            <div className="flex items-center mb-4 ">
              <p className="text-base font-semibold quickview-header">
                Effective Price :
              </p>
              <h2 className="text-sm font-semibold">{price}</h2>
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
                <SetQuantity />
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
