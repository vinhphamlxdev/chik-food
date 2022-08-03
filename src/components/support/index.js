import Button from "components/button";
import React from "react";
import styled from "styled-components";
const StyledSupport = styled.div`
  margin-top: 60px;
  .flip-card {
    background-color: transparent;
    height: 200px;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    border: 1px solid #e4e4e4;
  }

  .flip-card:focus {
    outline: 0;
  }

  .flip-card:hover .flip-card-inner,
  .flip-card:focus .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: #fff;
    color: black;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .flip-card-back {
    background-color: ${(props) => props.theme.textPrimary};
    padding: 30px;
    color: white;
    transform: rotateY(180deg);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 {
    font-size: 20px;
    font-family: Verdana, sans-serif;
    font-weight: bold;
    color: #fff;
  }
  .flip-title {
    color: ${(props) => props.theme.textTitle};
  }
  .flip-title {
    color: ${(props) => props.theme.textTitle};
  }
  .flip-btn {
    background-color: #fff;
    color: ${(props) => props.theme.textPrimary};
    &:hover {
      background-color: ${(props) => props.theme.primary};
      color: #fff;
    }
  }
`;
const Support = () => {
  return (
    <StyledSupport className="wrapper-layout">
      <div className="grid grid-cols-3 gap-x-5">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="flex flex-col items-center justify-center gap-y-2">
                <div className="flip-card-icon">
                  <i className="text-3xl font-medium bi text-secondary bi-truck"></i>
                </div>
                <h4 className="text-lg font-medium flip-title leading-[1.3]">
                  24/7
                </h4>
                <p className="text-base font-light flip-desc">
                  Customer service
                </p>
              </div>
            </div>
            <div className="flex-col flip-card-back gap-y-4">
              <h4 className="text-xl font-normal text-white">
                Delivery within 5 days
              </h4>
              <div className="relative">
                <Button className="flip-btn">Read More</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="flex flex-col items-center justify-center gap-y-2">
                <div className="flip-card-icon">
                  <i className="text-3xl font-medium text-secondary bi bi-currency-rupee"></i>
                </div>
                <h4 className="text-lg font-medium flip-title leading-[1.3]">
                  24/7
                </h4>
                <p className="text-base font-light flip-desc">
                  Customer service
                </p>
              </div>
            </div>
            <div className="flex-col flip-card-back gap-y-4">
              <h4 className="text-xl font-normal text-white">
                Call Toll free @ 2633 - 111 -222
              </h4>
              <div className="relative">
                <Button className="flip-btn">Read More</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="flex flex-col items-center justify-center gap-y-2">
                <div className="flip-card-icon">
                  <i className="text-3xl font-medium text-secondary bi bi-ticket-fill"></i>
                </div>
                <h4 className="text-lg font-medium flip-title leading-[1.3]">
                  $350
                </h4>
                <p className="text-base font-light flip-desc">Online Support</p>
              </div>
            </div>
            <div className="flex-col flip-card-back gap-y-4">
              <h4 className="text-xl font-normal text-white">
                Delivery within 5 days
              </h4>
              <div className="relative">
                <Button className="flip-btn">Read More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledSupport>
  );
};

export default Support;
