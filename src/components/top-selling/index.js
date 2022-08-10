import React, { useEffect, useState } from "react";
import CollectionTitle from "components/collections/CollectionTitle";
import styled from "styled-components";
import Button from "components/button";
import ProductItem from "components/productItem";
import { ProductsData } from "data";
import { useDispatch, useSelector } from "react-redux";
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
    &.active {
      background-color: ${(props) => props.theme.primary};
      color: #fff;
    }
  }
`;

const TopSell = () => {
  const [toggleTab, setToggleTab] = useState(1);
  const { productSell } = useSelector((state) => state.global);
  console.log("Prouduct sell:", productSell);
  const Royal = ProductsData.slice(0, 8);
  const Spicy = ProductsData.slice(8, 16);
  const Strips = ProductsData.slice(16, 24);

  const handleChangeTag = (index) => {
    setToggleTab(index);
  };

  return (
    <StyledSelling className="mt-10">
      <div className="wrapper-layout">
        <CollectionTitle title="Top Selling" isStar />
        <div className="flex justify-center mb-12 gap-x-5">
          <Button
            onClick={() => handleChangeTag(1)}
            className={`btn-menu ${toggleTab === 1 ? "active" : ""}`}
          >
            Royal
          </Button>
          <Button
            onClick={() => handleChangeTag(2)}
            className={`btn-menu ${toggleTab === 2 ? "active" : ""}`}
          >
            Spicy
          </Button>
          <Button
            onClick={() => handleChangeTag(3)}
            className={`btn-menu ${toggleTab === 3 ? "active" : ""}`}
          >
            Strips
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-y-5 gap-x-3">
          <ProductItem
            items={
              toggleTab === 1
                ? Royal
                : toggleTab === 2
                ? Spicy
                : toggleTab === 3
                ? Strips
                : Royal
            }
          />
        </div>
      </div>
    </StyledSelling>
  );
};

export default TopSell;
