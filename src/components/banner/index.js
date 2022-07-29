import React from "react";
import styled from "styled-components";
import BannerItem from "./banneritem";
import img1 from "assets/banner/img1.jpg";
import img2 from "assets/banner/img2.jpg";
import img3 from "assets/banner/img3.jpg";
import img4 from "assets/banner/img4.jpg";
const StyledBanner = styled.div`
  & .banner-item {
    & img {
      transition: 3s all;
    }
    &:hover img {
      transform: scale(1.2);
    }
  }
`;
const Banner = () => {
  return (
    <StyledBanner className="flex overflow-hidden max-h-[600px] mt-11">
      <div className="w-[67%] flex flex-col">
        <div className="flex items-center">
          <BannerItem title="Crunchy Chicken" price="$ 14.00" img={img1} />
          <BannerItem title="Lemon Grilled" price="$ 24.00" img={img2} />
        </div>
        <div className="relative">
          <BannerItem
            title="Juicy Tandoori"
            price="$ 52.00"
            positionLeft
            img={img3}
          />
        </div>
      </div>
      <div className="w-[33%] relative">
        <BannerItem title="Crispy Chicken Balls" wFull img={img4} order />
      </div>
    </StyledBanner>
  );
};

export default Banner;
