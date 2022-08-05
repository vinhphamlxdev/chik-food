import { css } from "styled-components";

export const GlobalClasses = css`
  p {
    font-size: 16px;
    font-weight: 300;
    color: ${(props) => props.theme.textPrimary};
  }
  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    line-height: 1.3;
    color: ${(props) => props.theme.textPrimary};
  }
  i {
    line-height: 0px;
  }
  h3 {
    font-size: 27px;
    font-weight: 500;
    line-height: 1.3;
  }
  img {
    object-fit: cover;
  }
  .transition-5 {
    transition: 0.5s all;
  }
  .wrapper-layout {
    display: block;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 12px;
    padding-right: 12px;
  }
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
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
