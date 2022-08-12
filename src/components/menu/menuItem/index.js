import React from "react";
import { useDispatch } from "react-redux";
import { setProductInfo, setShowModal } from "redux-toolkit/global/globalSlice";

const MenuItem = ({ item = {} }) => {
  const { productImage, title, price } = item;
  const dispatch = useDispatch();
  const handleShowQuickView = (item) => {
    dispatch(setShowModal(true));
    dispatch(setProductInfo(item));
  };
  return (
    <div
      onClick={() => handleShowQuickView(item)}
      className="relative flex cursor-pointer product-item "
    >
      <div className="relative cursor-pointer product-container overflow-hidden w-[25%]">
        <div className="relative product-additional">
          <img className="object-cover w-full" src={productImage[1]} alt="" />
        </div>
        <img className="object-cover w-full" src={productImage[0]} alt="" />
      </div>
      <div className="h-full transition-all duration-500 product-detail-bg">
        <div className="flex justify-between w-full product-detail">
          <div className="flex flex-col gap-y-4">
            <h3 className="text-xl font-bold capitalize transition-5 caption-title">
              {title}
            </h3>
            <p className="font-light caption-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, ...
            </p>
          </div>
          <div className="absolute flex flex-col items-center justify-center product-price">
            <span className="text-base font-light price text-primary">
              {price}
            </span>
            <div className="flex py-1 gap-x-1">
              {Array(4)
                .fill(0)
                .map((item, index) => (
                  <i
                    key={index}
                    className="text-sm bi bi-star-fill text-textPrimary"
                  ></i>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
