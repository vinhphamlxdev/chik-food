import React from "react";
import styled from "styled-components";
import bannerMission from "assets/bannermission.webp";
import Button from "components/button";
import img1 from "assets/banner/mission1.webp";
import img2 from "assets/banner/mission2.webp";
import img3 from "assets/banner/mission3.webp";
const StyledDiv = styled.div`
  background-image: url(${bannerMission});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;
const BannerMission = () => {
  return (
    <StyledDiv className="mt-16 p-11">
      <div className="grid grid-cols-2 gap-x-12">
        <div className="flex flex-col p-5">
          <h4 className="text-[52px] text-white font-medium tracking-[16px] leading-[1.3]">
            2023
          </h4>
          <h4 className="text-white mb-4 text-[76px] font-bold ">
            The
            <span className="ml-5 text-secondary">Chik</span>
          </h4>
          <div className="mb-8 text-xl font-light text-white">
            BUY 6 PIECES SMOKEY GRILLED <br />
            CHICKEN & <b className="font-bold">GET 3 PIECES </b>FREE
          </div>
          <div className="relative">
            <Button large>Shop Now</Button>
          </div>
        </div>
        <div className="relative grid items-center grid-cols-3 gap-x-5">
          <div className="relative inline-block border-4 h-fit border-secondary">
            <img src={img1} alt="" />
          </div>
          <div className="relative inline-block border-4 h-fit border-secondary">
            <img src={img2} alt="" />
          </div>
          <div className="relative inline-block border-4 h-fit border-secondary">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default BannerMission;
