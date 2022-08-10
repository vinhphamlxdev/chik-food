import React from "react";
import CollectionTitle from "components/collections/CollectionTitle";
import styled from "styled-components";
import Button from "components/button";
import ProductItem from "components/productItem";
import { ProductsData } from "data";
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
`;
const TopSell = () => {
  const productSell = ProductsData.slice(0, 8);
  console.log(productSell);
  return (
    <StyledSelling className="mt-10">
      <div className="wrapper-layout">
        <CollectionTitle title="Top Selling" isStar />
        <div className="flex justify-center mb-12 gap-x-5">
          <Button className="btn-menu">Chicken Meal </Button>
          <Button className="btn-menu">Chicken Meal </Button>
        </div>
        <div className="grid grid-cols-4 gap-y-5 gap-x-3">
          <ProductItem items={productSell} />
        </div>
      </div>
    </StyledSelling>
  );
};

export default TopSell;
