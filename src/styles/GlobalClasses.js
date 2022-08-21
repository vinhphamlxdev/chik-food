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
  //toast
  .Toastify__toast-body {
    font-size: 16px;
    color: ${(props) => props.theme.textPrimary};
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
  .has-scrollbar {
    background-color: ${(props) => props.theme.bgModal};
    background-color: transparent;
    will-change: scroll-position;
    scroll-behavior: smooth;
    overflow: hidden overlay;
    &::-webkit-scrollbar {
      display: none;
      width: 6px;
    }
    &:hover::-webkit-scrollbar {
      width: 6px;
      display: block;
      display: inline-block;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background: #ccc;
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
  //Responsive
  @media only screen and (max-width: 1024px) {
  }
`;
