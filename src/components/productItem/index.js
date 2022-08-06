import Icon from "components/Icon";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCartList,
  setProductInfo,
  setShowModal,
} from "redux-toolkit/global/globalSlice";
import styled from "styled-components";
const StyledProducts = styled.div`
  transition: 0.5s all;
  border: 1px solid #f4f4f4;
  overflow: hidden;
  &:hover .products-content {
    background-color: ${(props) => props.theme.primary};
  }
  &:hover .product-star,
  &:hover .price,
  &:hover .title {
    color: #fff;
  }
  &:hover {
    border: 1px solid ${(props) => props.theme.primary};
  }
  & .add-cart-list {
    right: -35px;
    transition: 0.3s all;
  }
  &:hover .add-cart-list {
    right: 2px;
  }
  & .product-img {
    cursor: pointer;
    & .product-add {
      position: absolute;
      top: 0;
      transform: translate(100%);
      transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      opacity: 0;
      visibility: hidden;
    }
    &:hover .product-add {
      opacity: 1;
      visibility: visible;
      transform: translate(0);
    }
  }
  transition: 0.5s all;
  & .title {
    color: ${(props) => props.theme.textPrimary};
  }
  & .price {
    color: ${(props) => props.theme.primary};
  }
`;
const ProductItem = ({ items = [] }) => {
  const { cartList } = useSelector((state) => state.global);
  // console.log("cart list", cartList);
  const dispatch = useDispatch();
  const handleShowModal = (productItem) => {
    dispatch(setShowModal(true));
    dispatch(setProductInfo(productItem));
  };
  const handleAddProduct = (productItem) => {
    // console.log(productItem);
    dispatch(setCartList(productItem));
  };
  return (
    <>
      {items.map((item, index) => {
        const { id, productImage = [], title, price } = item;
        return (
          <StyledProducts key={id} className="relative products-item">
            <div className="absolute add-cart-list   flex z-20 flex-col gap-y-[2px] top-[2px]">
              <Icon onClick={() => handleAddProduct(item)}>
                <i className="text-sm bi text-inherit leading-[0px] bi-cart-plus-fill"></i>
              </Icon>
              <Icon onClick={() => handleShowModal(item)}>
                <i className="text-sm  text-inherit leading-[0px]  bi bi-eye"></i>
              </Icon>
              <Icon>
                <i className="text-sm  text-inherit leading-[0px]  bi bi-heart"></i>
              </Icon>
            </div>
            <div className="relative overflow-hidden product-img">
              <div className="product-add">
                <img src={productImage[1]} alt="" />
              </div>
              <img src={productImage[0]} alt="" />
            </div>
            <div className="px-[10px] products-content bg-[#f4f4f4] py-5 flex flex-col items-center">
              <span className="text-sm transition-5 cursor-pointer font-semibold mb-4 tracking-[0px] title">
                {title}
              </span>
              <div className="text-xl font-medium transition-5 price">
                ${price.toLocaleString()}
              </div>
              <div className="flex py-2">
                {Array(5)
                  .fill(0)
                  .map((item, index) => (
                    <i
                      key={index}
                      className="bi text-xs font-light product-star leading-[0px] text-textPrimary bi-star"
                    ></i>
                  ))}
              </div>
            </div>
          </StyledProducts>
        );
      })}
    </>
  );
};

export default ProductItem;
