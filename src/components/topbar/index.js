import React from "react";
import styled from "styled-components";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { RiGoogleFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
const StyledTopbar = styled.div`
  background-color: ${(props) => props.theme.topbarBg};
  color: ${(props) => props.theme.textTopbar};

  & svg:hover {
    color: ${(props) => props.theme.primary};
    transition: 0.3s all;
  }
  .topbar-line {
    background-color: ${(props) => props.theme.textTopbar};
  }
  .icon-select,
  .topbar-select {
    color: ${(props) => props.theme.textTopbar};
  }
`;
const Topbar = () => {
  return (
    <StyledTopbar className="w-full px-4 py-1">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-[10px] cursor-pointer">
            <AiOutlineTwitter className="text-2xl text-white pr-[10px]" />
          </div>
          <div className="mr-[10px] cursor-pointer">
            <GrFacebookOption className="text-2xl text-white pr-[10px]" />
          </div>
          <div className="mr-[10px] cursor-pointer">
            <RiGoogleFill className="text-2xl text-white pr-[10px]" />
          </div>
          <div className="mr-[10px] cursor-pointer">
            <RiLinkedinFill className="text-2xl text-white pr-[10px]" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="px-4 flex items-center text-base font-light  topbar-select ">
            USD
            <i className="bi leading-[0px] text-lg ml-1 icon-select bi-chevron-down"></i>
          </div>
          <div className="flex items-center ">
            <div className="mr-[10px]  text-inherit text-base font-light">
              <span className="text-inherit text-base pr-[10px]">
                Call Us : (00) 000 111 222
              </span>
            </div>
            <div className="topbar-line mr-[20px]  w-[1px] h-3  "></div>
            <div className="mr-[10px]  text-inherit text-base font-light">
              <span className="text-inherit text-sm pr-[10px]">
                Mail : info@somedomain.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </StyledTopbar>
  );
};

export default Topbar;
