import React, { useState } from "react";

import CollectionTitle from "components/collections/CollectionTitle";
import { ProductsData } from "data";
import styled from "styled-components";
import Button from "components/button";
import MenuItem from "./menuItem";
const StyledMenu = styled.div`
  padding: 85px 0 68px;
  & .menu-list {
    transition: 0.5s all;
    transform: translateY(100%);
    &.active {
      transform: translateY(0%);
    }
  }
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
    &.active {
      background-color: ${(props) => props.theme.primary};
      color: #fff;
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
  const [toggleTab, setToggleTab] = useState(1);
  const handleChangeTag = (index) => {
    setToggleTab(index);
  };

  return (
    <StyledMenu>
      <div className="wrapper-layout">
        <CollectionTitle isStar title="Our Special Menu" />
        <div className="flex justify-center gap-x-5">
          <Button
            onClick={() => handleChangeTag(1)}
            className={`btn-menu ${toggleTab === 1 ? "active" : ""}`}
          >
            Chicken Meal
          </Button>
          <Button
            onClick={() => handleChangeTag(2)}
            className={`btn-menu ${toggleTab === 2 ? "active" : ""}`}
          >
            Crunchy
          </Button>
          <Button
            onClick={() => handleChangeTag(3)}
            className={`btn-menu ${toggleTab === 3 ? "active" : ""}`}
          >
            Grilled Chicken
          </Button>
        </div>
        {toggleTab === 1 && (
          <div
            className={`grid grid-cols-2 gap-x-3 gap-y-5 menu-list ${
              toggleTab === 1 ? "active" : ""
            }`}
          >
            {ProductsData.slice(8, 16).map((item) => {
              return <MenuItem key={item.id} item={item} />;
            })}
          </div>
        )}
        {toggleTab === 2 && (
          <div
            className={`grid grid-cols-2 gap-x-3 gap-y-5 menu-list ${
              toggleTab === 2 ? "active" : ""
            }`}
          >
            {ProductsData.slice(0, 8).map((item) => {
              return <MenuItem item={item} />;
            })}
          </div>
        )}
        {toggleTab === 3 && (
          <div
            className={`grid grid-cols-2 gap-x-3 gap-y-5 menu-list ${
              toggleTab === 3 ? "active" : ""
            }`}
          >
            {ProductsData.slice(16, 24).map((item) => {
              return <MenuItem item={item} />;
            })}
          </div>
        )}
      </div>
    </StyledMenu>
  );
};

export default Menu;
