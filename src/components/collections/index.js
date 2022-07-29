import React from "react";
import CollectionTitle from "./CollectionTitle";
import chicken from "assets/chicken.webp";
import styled from "styled-components";
import Button from "components/button";
import banner1 from "assets/banner1.webp";
import banner2 from "assets/banner2.webp";
import { collectionData, bannerData } from "./data";
// slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
const StyledCollection = styled.div`
  .collection-item {
    .collection-img img {
      border: 5px solid ${(props) => props.theme.borderCol};
      transition: 0.5s all;
    }
    &:hover .collection-img img {
      border: 10px solid ${(props) => props.theme.borderCol};
    }
    .collection-overlay {
      background-color: rgba(252, 185, 23, 0.7);
      z-index: 10;
      transform: scale(0);
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }
    &:hover .collection-overlay {
      opacity: 1;
      transform: scale(1);
    }
    & .title {
      color: ${(props) => props.theme.primary};
      transition: 0.5s all;
    }
    & .title:hover {
      color: ${(props) => props.theme.textTitle};
    }
  }
  .collection-banner {
    .banner-half {
      width: 20%;
    }
    .banner-main {
      width: 60%;
      .btn-main {
        padding: 10px 24px;
      }
    }
    .next-btn-banner {
      right: 20px;
    }
    .prev-btn-banner {
      left: 20px;
    }
    .prev-btn-banner,
    .next-btn-banner {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 50;
      color: #fff;
      font-weight: 600;
      font-size: 34px;
      background-color: ${(props) => props.theme.textTitle};
      border-radius: 50%;
      cursor: pointer;
      opacity: 0.3;
      &:hover {
        background-color: ${(props) => props.theme.primary};
        opacity: 0.7;
      }
    }
  }
`;

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="next-btn-banner" onClick={onClick}>
      <BiChevronRight />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;

  return (
    <div className="prev-btn-banner" onClick={onClick}>
      <BiChevronLeft />
    </div>
  );
}
const Collections = () => {
  let slickProperty = {
    dots: false,
    infinite: false,
    speed: 500,
    // fade: true,
    cssEase: "linear",
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <StyledCollection className="pt-10">
      <div className="wrapper-layout">
        <CollectionTitle img={chicken} title="The Sound of Taste" />
        <div className="grid grid-cols-3 gap-x-7">
          {collectionData.map((item) => (
            <div key={item.id} className="relative text-center collection-item">
              <div className="relative w-full overflow-hidden rounded-full cursor-pointer collection-img ">
                <img
                  className="object-cover w-full rounded-full"
                  src={item.img}
                  alt=""
                />
                <div className="absolute inset-0 w-full h-full rounded-full collection-overlay"></div>
              </div>
              <div className="mt-[30px] text-center">
                <h4 className="mb-5 text-2xl font-semibold cursor-pointer title">
                  {item.title}
                </h4>
                <Button>Read More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-10 collection-banner gap-x-5">
        <div className="relative cursor-pointer banner-half">
          <img className="object-cover" src={banner1} alt="" />
        </div>
        <div className="relative banner-main">
          <Slider {...slickProperty}>
            {bannerData.map((banner) => {
              const { id, title, subTitle, url } = banner;
              return (
                <div key={id} className="relative cursor-pointer h-[375px] ">
                  <img className="object-cover w-full" src={url} alt="" />
                  <div className="absolute top-[13%] px-[60px] z-10">
                    <div className="flex flex-col gap-y-5">
                      <h2 className="text-[27px] font-semibold leading-[1] text-primary">
                        {title}
                      </h2>
                      <h3 className="text-textPrimary font-light leading-[1] text-[34px]">
                        {subTitle}
                      </h3>
                      <div className="relative">
                        <Button className="btn-main">Shop Now</Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="cursor-pointer banner-half">
          <img src={banner2} alt="" />
        </div>
      </div>
    </StyledCollection>
  );
};

export default Collections;
