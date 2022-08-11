import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBackTop } from "redux-toolkit/global/globalSlice";
import styled from "styled-components";
const StyledBackTop = styled.div`
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  position: fixed;
  z-index: 99;
  right: 30px;
  bottom: 30px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 100rem;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
const BackTop = () => {
  const dispatch = useDispatch();
  const { showBackTop } = useSelector((state) => state.global);
  useEffect(() => {
    const handleShow = () => {
      const scrollvalue = window.scrollY;
      if (scrollvalue > 2000) {
        dispatch(setBackTop(true));
      } else {
        dispatch(setBackTop(false));
      }
    };
    window.addEventListener("scroll", handleShow);
    return () => window.removeEventListener("scroll", handleShow);
  }, [dispatch]);
  const handleBackTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };
  return (
    <StyledBackTop
      onClick={handleBackTop}
      className={` items-center justify-center ${
        showBackTop ? "flex" : "hidden"
      }`}
    >
      <i className="text-lg text-white leading-[0] bi bi-arrow-up"></i>
    </StyledBackTop>
  );
};

export default BackTop;
