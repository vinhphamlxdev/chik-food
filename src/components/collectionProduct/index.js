import React from "react";
import { productData } from "./data";
import Button from "components/button";
import styled from "styled-components";
import TitlePage from "components/titlePage";
import { useNavigate } from "react-router-dom";
const StyledDiv = styled.div`
  .title {
    color: ${(props) => props.theme.textTitle};
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  span {
    color: ${(props) => props.theme.textTitle};
    cursor: pointer;
  }
  .product-item {
    &:hover .title {
      color: ${(props) => props.theme.primary};
    }
    .product-img {
      border-bottom: 1px solid ${(props) => props.theme.borderColor};
    }
    border: 1px solid ${(props) => props.theme.borderColor};
    .title {
      color: ${(props) => props.theme.textPrimary};
      font-size: 16px;
      &:hover {
        color: ${(props) => props.theme.primary};
      }
    }
    p {
      color: ${(props) => props.theme.textPrimary};
    }
  }
`;
const CollectionProduct = () => {
  const navigate = useNavigate();

  return (
    <StyledDiv>
      <TitlePage collection title="All Collections" subTitle="Collections" />
      <div className="wrapper-layout">
        <div className="grid grid-cols-4 my-8 gap-x-5 gap-y-5">
          {productData.map((item) => (
            <div
              onClick={() => navigate("/shop")}
              key={item.id}
              className="relative flex flex-col items-center product-item"
            >
              <div className="relative cursor-pointer product-img">
                <img src={item.img} alt="" />
              </div>
              <div className="flex flex-col items-center w-full px-5 py-8 gap-y-3 collection__product-content">
                <h4 className="m-0 font-normal cursor-pointer hover:text-primary title">
                  {item.title}
                </h4>
                <p className="text-[13px] font-light">12 Items</p>
                <Button>Read More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledDiv>
  );
};

export default CollectionProduct;
