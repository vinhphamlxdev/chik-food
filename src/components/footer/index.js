import React from "react";
import styled from "styled-components";
import footerImg from "assets/footer/footer.webp";
import logoFooter from "assets/footer/logo.webp";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { RiGoogleFill, RiLinkedinFill } from "react-icons/ri";
import payment1 from "assets/footer/payment1.webp";
import payment2 from "assets/footer/payment2.webp";
import payment3 from "assets/footer/payment3.webp";
import payment4 from "assets/footer/payment4.webp";
import payment5 from "assets/footer/payment5.webp";
const StyledFooter = styled.div`
  background-image: url(${footerImg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 70px 20px;
  position: relative;
  &::after {
    background: #000;
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    inset: 0;
    opacity: 0.6;
  }
  & .social-btn {
    cursor: pointer;
    font-size: 24px;
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <div className="wrapper-layout">
        <div className="relative z-30">
          <div className="flex justify-center mb-8 text-center ">
            <img src={logoFooter} alt="" />
          </div>
          <div className="flex justify-center mb-6 gap-x-6">
            <AiOutlineTwitter className="social-btn text-secondary hover:text-primary" />
            <GrFacebookOption className="social-btn text-secondary hover:text-primary" />
            <RiGoogleFill className="social-btn text-secondary hover:text-primary" />
            <RiLinkedinFill className="social-btn text-secondary hover:text-primary" />
          </div>
          <div className="flex justify-center gap-x-10">
            <span className="text-lg font-light text-white cursor-pointer hover:text-secondary transition-5 ">
              Search
            </span>
            <span className="text-lg font-light text-white cursor-pointer hover:text-secondary transition-5 ">
              Help
            </span>
            <span className="text-lg font-light text-white cursor-pointer hover:text-secondary transition-5 ">
              Information
            </span>
            <span className="text-lg font-light text-white cursor-pointer hover:text-secondary transition-5 ">
              Privacy Policy
            </span>
            <span className="text-lg font-light text-white cursor-pointer hover:text-secondary transition-5 ">
              Shipping Delails
            </span>
          </div>
          <span className="block pt-2 mb-3 text-base font-light text-center text-white">
            Copyright © 2019, Chik Powered by Shopify
          </span>
          <div className="flex justify-center payment-list gap-x-4">
            <div className="relative payment-item">
              <img
                className="cursor-pointer opacity-70 hover:opacity-100 transition-5"
                src={payment1}
                alt=""
              />
            </div>
            <div className="relative payment-item">
              <img
                className="cursor-pointer opacity-70 hover:opacity-100 transition-5"
                src={payment2}
                alt=""
              />
            </div>
            <div className="relative payment-item">
              <img
                className="cursor-pointer opacity-70 hover:opacity-100 transition-5"
                src={payment3}
                alt=""
              />
            </div>
            <div className="relative payment-item">
              <img
                className="cursor-pointer opacity-70 hover:opacity-100 transition-5"
                src={payment4}
                alt=""
              />
            </div>
            <div className="relative payment-item">
              <img
                className="cursor-pointer opacity-70 hover:opacity-100 transition-5"
                src={payment5}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
