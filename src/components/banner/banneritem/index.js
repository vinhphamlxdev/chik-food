import Button from "components/button";
import React from "react";
import styled from "styled-components";
const StyledDiv = styled.div`
  & .banner-btn {
    background-color: #fff;
    color: #000;
    margin-top: 20px;
    &:hover {
      background-color: ${(props) => props.theme.primary};
      color: #fff;
    }
  }
`;
const BannerItem = ({
  onclick = () => {},
  className = "",
  children,
  img,
  title,
  price,
  positionLeft,
  wFull,
  order,
  ...props
}) => {
  return (
    <StyledDiv
      onclick={onclick}
      className={`relative flex overflow-hidden cursor-pointer banner-item ${className}`}
    >
      <img src={img} alt="" />
      <div
        className={`absolute cursor-pointer  ${
          wFull ? "w-full" : "w-[70%]"
        } bottom-0 p-8 bg-black bg-opacity-80 ${
          positionLeft ? "left-0" : "right-0"
        }`}
      >
        <h3 className="mb-4 text-white leading-[1.3] cursor-pointer ">
          {title}
        </h3>
        {price && (
          <span className="leading-[1.7] text-2xl font-light text-secondary cursor-pointer">
            {price}
          </span>
        )}
        {order && (
          <div className="flex flex-col">
            <span className="text-[34px] whitespace-nowrap font-medium text-secondary">
              Bulk Order’s Available
            </span>
            <div>
              <Button className="banner-btn">Shop Now</Button>
            </div>
          </div>
        )}
      </div>
    </StyledDiv>
  );
};

export default BannerItem;
