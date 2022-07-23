import React from "react";
import styled from "styled-components";
import logo from "assets/logo.webp";
import { navbarData } from "./navBarData";
import { NavLink } from "react-router-dom";
const StyledHeader = styled.div`
  width: 100%;
  z-index: 99;
  box-shadow: 0 0 10px #0000001a;
  background-color: ${(props) => props.theme.mainBg};
  color: ${(props) => props.theme.textPrimary};
  font-size: 18px;
  font-weight: 300;
  .navbar-item {
    position: relative;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 14px;
    &.is-active {
      color: ${(props) => props.theme.primary};
    }
  }
  .navbar-link,
  i {
    transition: 0.3s all;
    &:hover {
      color: ${(props) => props.theme.primary};
    }
  }
`;
const Header = () => {
  return (
    <StyledHeader>
      <div className="wrapper-layout">
        <div className="flex items-center justify-between relative">
          <div className="logo-header cursor-pointer">
            <img className="cursor-pointer" src={logo} alt="" />
          </div>
          <div className="header-navbar flex items-center px-[10px]">
            {navbarData.length > 0 &&
              navbarData.map((link) => {
                const { id, title, path } = link;
                return (
                  <NavLink to={path} key={id} className="navbar-item">
                    <div className="text-inherit cursor-pointer text-sm navbar-link font-medium">
                      {title}
                    </div>
                  </NavLink>
                );
              })}
          </div>
          <div className="flex items-center ">
            <div className="py-6 px-[10px] text-inherit">
              <i className="bi cursor-pointer text-lg text-inherit bi-search"></i>
            </div>
            <div className="py-6 px-[10px] text-inherit">
              <i className="bi leading-[0px] cursor-pointer text-lg text-inherit bi-cart-plus-fill"></i>
            </div>
            <div className="py-6 px-[10px] text-inherit">
              <i className="bi text-lg text-inherit leading-[0px] cursor-pointer bi-person-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
