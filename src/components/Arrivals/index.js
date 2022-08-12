import React from "react";
import CollectionTitle from "components/collections/CollectionTitle";
import Slider from "react-slick";
import styled from "styled-components";
import Button from "components/button";
import { arrivalData } from "./data";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBlogItem } from "redux-toolkit/global/globalSlice";
const StyledDiv = styled.div`
  .arrivals-item {
    display: flex !important;
    flex-direction: column !important;
    .arrivals-content {
      border: 1px solid #e4e4e4;
      flex: 1;
    }
    .arrivals-btn {
      font-size: 16px;
      padding: 10px 20px 7px;
    }
  }
  & .slick-slide {
    padding: 10px;
  }
  & .slick-dots li button:before {
    color: ${(props) => props.theme.textTitle};
    font-size: 12px;
    opacity: 0.8;
  }
  & .slick-dots li.slick-active button:before {
    color: ${(props) => props.theme.primary};
    opacity: 1;
  }
`;
const Arrivals = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRedirect = (blogItem) => {
    console.log(blogItem);
    dispatch(setBlogItem(blogItem));
    navigate("/blog");
  };
  let slickProperty = {
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: "linear",
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,

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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <StyledDiv className="mt-10 mb-16">
      <div className="wrapper-layout">
        <CollectionTitle title="New Arrivals" className="mb-10" isStar />
        <div className="relative w-full slick__slide-container ">
          <Slider {...slickProperty}>
            {arrivalData.map((item) => {
              const { id, img, title } = item;
              return (
                <div key={id} className="relative flex flex-col arrivals-item">
                  <div className="relative max-h-[228px] flex-shrink-0 overflow-hidden arrivals-img">
                    <img src={img} alt="" />
                  </div>
                  <div className="flex-1 p-5 arrivals-content bg-fourth ">
                    <div className="relative flex flex-col">
                      <div className="flex mb-5 gap-x-5">
                        <div className="py-2 px-[10px] bg-primary flex flex-col items-center">
                          <span className="text-sm font-light text-white">
                            18
                          </span>
                          <span className="text-sm font-light text-white">
                            Nov 2023
                          </span>
                        </div>
                        <div className="flex flex-col ">
                          <div className="flex items-center text-left ">
                            <div className="flex gap-x-[6px] items-center">
                              <i className="text-base bi text-textColor bi-person"></i>
                              <span className="text-sm font-light text-textColor">
                                Ram M
                              </span>
                            </div>
                            <div className="w-[1px] mx-2 h-3 bg-opacity-50 line bg-textColor"></div>
                            <div className="flex items-center gap-x-1">
                              <i className="text-base bi text-textColor bi-send"></i>
                              <span className="flex items-center text-sm font-light text-textColor">
                                <p className="mr-1 text-sm font-light text-textColor">
                                  {Math.floor(Math.random() * 20)}
                                </p>
                                Comment
                              </span>
                            </div>
                          </div>
                          <h4 className="text-xl font-semibold cursor-pointer text-textColor hover:text-primary transition-5">
                            {title}
                          </h4>
                        </div>
                      </div>
                      <p className="mb-4 text-lg font-light text-justify">
                        Lorem ipsum has become the industry standard for design
                        mockups and prototypes. By adding a little bit of Latin
                        to a mockup, you’re able to show clients a more complete
                        version ...
                      </p>
                    </div>
                    <div className="mt-auto text-left">
                      <Button
                        onClick={() => handleRedirect(item)}
                        className="arrivals-btn"
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Arrivals;
