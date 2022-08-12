import Button from "components/button";
import React from "react";
import { useNavigate } from "react-router-dom";
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
  onClick = () => {},
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
  const navigate = useNavigate();
  return (
    <StyledDiv
      onClick={() => navigate("/shop")}
      className={`relative flex overflow-hidden cursor-pointer banner-item ${className}`}
    >
      <img src={img} alt="" />
      <div
        className={`absolute cursor-pointer  ${
          wFull ? "w-full" : "w-[70%]"
        } bottom-0 p-8 bg-black bg-opacity-80 ${
          positionLeft ? "left-0 w-4/12" : "right-0"
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
              <Button onClick={() => navigate("/shop")} className="banner-btn">
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </StyledDiv>
  );
};

export default BannerItem;
