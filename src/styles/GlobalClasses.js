import { css } from "styled-components";

export const GlobalClasses = css`
  p {
    font-size: 16px;
    font-weight: 300;
  }
  i {
    line-height: 0px;
  }
  .wrapper-layout {
    display: block;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 30px;
    padding-right: 30px;
  }
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  //slick slider home banner
  .next-btn {
    position: absolute;
    top: 50%;
    right: 3%;
    transform: translateY(-50%);
    display: inline-block;
    transition: 0.5s all;
    color: #fff;
    font-size: 40px;
    cursor: pointer;
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    svg {
      color: #fff;
      font-size: 50px;
    }
  }
  .prev-btn {
    position: absolute;
    top: 50%;
    left: 3%;
    transform: translateY(-50%);
    display: inline-block;
    transition: 0.5s all;
    color: #fff;
    cursor: pointer;
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    svg {
      color: #fff;
      font-size: 50px;
    }
  }
`;
