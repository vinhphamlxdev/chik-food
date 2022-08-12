import React from "react";
import styled from "styled-components";
import Slideicon from "assets/sliderIcon.webp";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { sliderData } from "./slideData";
// slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "components/button";
import { useNavigate } from "react-router-dom";
const StyledSlider = styled.div`
  & .slider-btn {
    display: inline-block;
    padding: 10px 24px;
    cursor: pointer;
    font-size: 18px;
    transition: all 0.4s ease-in-out;
    outline: none;
    background-color: ${(props) => props.theme.primary};
    color: #fff;
  }
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  .slide-title {
    color: ${(props) => props.theme.primary};
  }
  &:hover .next-btn,
  &:hover .prev-btn {
    opacity: 1;
    visibility: visible;
  }
  .slick-active {
    & .slide-title {
      -webkit-animation: 1s ease-in-out 0s normal none 1 running fadeInDown;
      animation: 1s ease-in-out 0s normal none 1 running fadeInDown;
    }
    & .slide-subheading {
      -webkit-animation: 1.2s ease-in-out 0s normal none 1 running fadeInDown;
      animation: 1.2s ease-in-out 0s normal none 1 running fadeInDown;
    }
    & .slider-btn {
      -webkit-animation: 1.6s ease-in-out 0s normal none 1 running fadeInDown;
      animation: 1.6s ease-in-out 0s normal none 1 running fadeInDown;
    }
  }
  .animated-btn:hover {
    background-color: ${(props) => props.theme.primary} !important;
  }
`;

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="next-btn" onClick={onClick}>
      <BiChevronRight />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;

  return (
    <div className="prev-btn" onClick={onClick}>
      <BiChevronLeft />
    </div>
  );
}
const HomeSlider = () => {
  const navigate = useNavigate();
  let slickProperty = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    arrows: true,
    autoplay: false,
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
    <StyledSlider className="relative w-full overflow-hidden home-slider">
      <Slider {...slickProperty}>
        {sliderData.map((slide) => {
          const { id, img, title, subTitle } = slide;
          return (
            <div
              key={id}
              className="relative w-full overflow-hidden slider-main"
            >
              <img
                className="object-cover w-full select-none"
                src={img}
                alt=""
              />
              <div className="p-[10px] absolute left-2/4 -translate-x-2/4  text-center max-w-full top-2/4 -translate-y-2/4">
                <div className="rounded-[20px] py-[30px] inline-block px-[50px] bg-slideBg">
                  <div className="relative flex justify-center w-full mb-5 text-center">
                    <img src={Slideicon} alt="" />
                  </div>
                  <h5 className="inline-block text-4xl font-semibold text-center select-none slide-title">
                    {title}
                  </h5>
                  <h3 className="mb-5 select-none text-4xl font-semibold text-[#fcb917] slide-subheading">
                    {subTitle}
                  </h3>
                  <Button
                    onClick={() => navigate("/shop")}
                    className="slider-btn hover:bg-primary"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </StyledSlider>
  );
};

export default HomeSlider;
