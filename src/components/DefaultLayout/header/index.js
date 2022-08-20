import React, { useEffect } from "react";
import styled from "styled-components";
import logo from "assets/logo.webp";
import { navbarData } from "./navBarData";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BiLogIn } from "react-icons/bi";
import { signOut } from "firebase/auth";
import { auth } from "firebase-app/firebase-config";
import swal from "sweetalert";
import { useAuth } from "contexts/auth-context";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
const StyledHeader = styled.header`
  width: 100%;
  z-index: 99;
  box-shadow: 0 0 10px #0000001a;
  background-color: ${(props) => props.theme.mainBg};
  color: ${(props) => props.theme.textPrimary};
  font-size: 18px;
  font-weight: 300;
  &.isSticky {
    position: fixed;
    background-color: white;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 20px 50px 0 rgb(0 0 0 / 5%);
    z-index: 98;
  }
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
  .user-icon {
    &:hover .user-list {
      visibility: visible;
      opacity: 1;
    }
    .user-list::after {
      content: "";
      height: 20px;
      position: absolute;
      width: 100%;
      z-index: 100;
      top: -16px !important;
      background-color: transparent;
      left: 0;
    }
  }
`;
const Header = () => {
  const navigate = useNavigate();
  const { cartList, bgHeader } = useSelector((state) => state.global);
  const { userInfo, setUserInfo } = useAuth();
  console.log(userInfo);
  const totalQuantity = () => {
    return cartList.reduce((total, productItem, index) => {
      return (total += productItem.quantity);
    }, 0);
  };
  const quantity = totalQuantity();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUserInfo(undefined);
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Log out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Something went wrong:${error}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const handleRedirectCartPage = () => {
    if (quantity === 0) {
      toast.error("Your cart is currently empty!", {
        autoClose: 1500,
        pauseOnHover: false,
      });
    } else {
      navigate("/cart");
    }
  };
  return (
    <StyledHeader className={`${bgHeader ? "isSticky" : ""}`}>
      <div className="wrapper-layout">
        <div className="relative flex items-center justify-between">
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer logo-header"
          >
            <img className="cursor-pointer" src={logo} alt="" />
          </div>
          <div className="header-navbar flex items-center px-[10px]">
            {navbarData.length > 0 &&
              navbarData.map((link) => {
                const { id, title, path } = link;
                return (
                  <NavLink
                    to={path}
                    key={id}
                    style={({ isActive }) =>
                      isActive ? { color: "#d60508" } : {}
                    }
                    className="navbar-item"
                  >
                    <div className="relative text-sm font-medium cursor-pointer text-inherit navbar-link">
                      {title}
                    </div>
                  </NavLink>
                );
              })}
          </div>
          <div className="flex items-center ">
            <div className="py-6 px-[10px] text-inherit">
              <i className="text-lg cursor-pointer bi text-inherit bi-search"></i>
            </div>
            <div
              onClick={handleRedirectCartPage}
              className="py-6 select-none relative px-[10px] text-inherit"
            >
              <i className="bi leading-[0px] cursor-pointer text-lg text-inherit bi-cart-plus-fill"></i>
              <span className="absolute top-4 right-1 flex items-center justify-center w-4 leading-[0] h-4 text-sm font-light text-white rounded-full bg-primary">
                {quantity}
              </span>
            </div>
            <div className="relative user-icon px-[10px] gap-x-2 text-inherit">
              <i className="bi text-lg text-inherit leading-[0px] cursor-pointer bi-person-fill"></i>

              {userInfo ? (
                <div className="absolute user-list  items-start right-0 w-[210px] rounded-sm shadow-[0_0_30px_#00000026] z-30 flex flex-col p-5 bg-white top-[130%] gap-y-4">
                  <div className="flex items-center text-sm font-normal cursor-pointer hover:text-primary gap-x-2">
                    <div className="relative overflow-hidden rounded-full w-7 h-7 whitespace-nowrap">
                      <img
                        className="w-full rounded-full"
                        src={userInfo.avatar}
                        alt=""
                      />
                    </div>
                    {userInfo.displayName}
                  </div>
                  <div
                    onClick={handleLogout}
                    className="flex items-center text-sm font-normal cursor-pointer hover:text-primary gap-x-2"
                  >
                    <BiLogIn className="text-xl text-left mr-1 hover:text-primary leading-[0] cursor-pointer text-inherit" />
                    Log Out
                  </div>
                  <div className="flex items-center text-sm font-normal cursor-pointer hover:text-primary gap-x-2">
                    <i className="text-base leading-[0] cursor-pointer bi bi-heart text-inherit"></i>
                    Wishlist
                  </div>
                </div>
              ) : (
                <div className="absolute user-list opacity-0 invisible items-start right-0 w-[210px] rounded-sm shadow-[0_0_30px_#00000026] z-30 flex flex-col p-5 bg-white top-[130%] gap-y-4">
                  <div
                    onClick={() => navigate("/sign-in")}
                    className="flex items-center text-sm font-normal cursor-pointer hover:text-primary gap-x-2"
                  >
                    <BiLogIn className="text-xl text-left mr-1 hover:text-primary leading-[0] cursor-pointer text-inherit" />
                    Log in
                  </div>
                  <div
                    onClick={() => navigate("/sign-up")}
                    className="flex items-center text-sm font-normal cursor-pointer hover:text-primary gap-x-2"
                  >
                    <i className="text-xl leading-[0] cursor-pointer bi bi-person-fill text-inherit"></i>
                    Create Account
                  </div>
                  <div className="flex items-center text-sm font-normal cursor-pointer hover:text-primary gap-x-2">
                    <i className="text-base leading-[0] cursor-pointer bi bi-heart text-inherit"></i>
                    Wishlist
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
