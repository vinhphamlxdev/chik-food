import CollectionTitle from "components/collections/CollectionTitle";
import React from "react";
import styled from "styled-components";
import star from "assets/chickenStar.webp";
import { chickenMealData } from "./data";
import Button from "components/button";
const StyledMenu = styled.div`
  padding: 85px 0 68px;
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
  & .product-item {
    border: 1px solid #f4f4f4;
    transition: 0.5s all;
    &:hover {
      border: 1px solid ${(props) => props.theme.primary};
    }
    &:hover div .caption-title {
      color: ${(props) => props.theme.primary};
    }
    &:hover .product-detail-bg {
      background-color: #f4f4f4;
    }
    & .product-container {
      & .product-additional {
        position: absolute;
        top: 0;
        transform: translate(100%);
        transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        opacity: 0;
        visibility: hidden;
      }
      &:hover .product-additional {
        opacity: 1;
        visibility: visible;
        transform: translate(0);
      }
    }
    & .product-detail {
      padding: 15px 90px 5px 20px;
      transition: 0.5s all;
      & .caption-title {
        color: ${(props) => props.theme.textPrimary};
        line-height: 1;
      }
      & .caption-desc {
        font-size: 18px;
        color: ${(props) => props.theme.textPrimary};
        line-height: 1.7;
      }
      .product-price {
        top: 50%;
        transform: translateY(-50%);
        right: 30px;
      }
    }
  }
`;
const Menu = () => {
  return (
    <StyledMenu>
      <div className="wrapper-layout">
        <CollectionTitle img={star} title="Our Special Menu"></CollectionTitle>
        <div className="flex justify-center gap-x-5">
          <Button className="btn-menu">Chicken Meal </Button>
          <Button className="btn-menu">Chicken Meal </Button>
          <Button className="btn-menu">Chicken Meal </Button>
          <Button className="btn-menu">Chicken Meal </Button>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-5 ">
          {chickenMealData.map((item) => {
            const { id, image, addImg, price, title } = item;
            console.log(item);
            return (
              <div
                key={id}
                className="relative flex cursor-pointer product-item "
              >
                <div className="relative cursor-pointer product-container overflow-hidden w-[25%]">
                  <div className="relative product-additional">
                    <img className="object-cover w-full" src={addImg} alt="" />
                  </div>
                  <img className="object-cover w-full" src={image} alt="" />
                </div>
                <div className="h-full transition-all duration-500 product-detail-bg">
                  <div className="flex justify-between w-full product-detail">
                    <div className="flex flex-col gap-y-4">
                      <h3 className="text-xl font-bold capitalize transition-5 caption-title">
                        {title}
                      </h3>
                      <p className="font-light caption-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        ...
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
          })}
        </div>
      </div>
    </StyledMenu>
  );
};

export default Menu;
