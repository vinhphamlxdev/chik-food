import CollectionTitle from "components/collections/CollectionTitle";
import React from "react";
import styled from "styled-components";
import star from "assets/progress/star.webp";
import { productData } from "./data";
import Button from "components/button";
const StyledSelling = styled.div`
  & .btn-menu {
    background-color: #fff;
    color: ${(props) => props.theme.textPrimary};
    border: 2px solid #fcb917;
    font-weight: 600;
    margin-bottom: 40px;
    &:hover {
      color: #fff;
      border: 2px solid ${(props) => props.theme.primary};
      background: ${(props) => props.theme.primary};
    }
  }
  & .products-item {
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
  }
`;
const TopSell = () => {
  return (
    <StyledSelling className="mt-10">
      <div className="wrapper-layout">
        <CollectionTitle title="Top Selling" img={star} />
        <div className="flex justify-center mb-12 gap-x-5">
          <Button className="btn-menu">Chicken Meal </Button>
          <Button className="btn-menu">Chicken Meal </Button>
        </div>
        <div className="grid grid-cols-4 gap-y-5 gap-x-3">
          {productData.map((product, index) => {
            const { id, title, price } = product;
            return (
              <div key={id} className="relative products-item">
                <div className="absolute add-cart-list   flex z-20 flex-col gap-y-[2px] top-[2px]">
                  {Array(4)
                    .fill(0)
                    .map((item, index) => (
                      <button
                        key={index}
                        className="text-white add-cart-btn bg-secondary cursor-pointer w-[35px] h-[35px] transition-5 hover:bg-primary"
                      >
                        <i className="text-sm bi text-inherit leading-[0px] bi-cart-plus-fill"></i>
                      </button>
                    ))}
                </div>
                <div className="relative overflow-hidden product-img">
                  <div className="product-add">
                    <img
                      src="//cdn.shopify.com/s/files/1/0016/3387/8116/products/product22_d701b6b7-3c18-4c7b-bce7-c98846366aae_large.jpg?v=1542602192"
                      alt=""
                    />
                  </div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0016/3387/8116/products/product31_0f63e89e-cacc-4e58-a1c9-ed0f994f9e05_large.jpg?v=1542604317"
                    alt=""
                  />
                </div>
                <div className="px-[10px] products-content bg-[#f4f4f4] py-5 flex flex-col items-center">
                  <span className="text-sm transition-5 cursor-pointer font-semibold mb-4 tracking-[0px] title">
                    {title}
                  </span>
                  <div className="text-xl font-medium transition-5 price">
                    {price}
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
              </div>
            );
          })}
        </div>
      </div>
    </StyledSelling>
  );
};

export default TopSell;
