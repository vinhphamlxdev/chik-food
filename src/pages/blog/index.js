import Container from "components/container";
import TitlePage from "components/titlePage";
import React, { useEffect } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { RiGoogleFill, RiLinkedinFill } from "react-icons/ri";
import { useSelector } from "react-redux";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { blogItem } = useSelector((state) => state.global);
  const { img, title } = blogItem;
  return (
    <Container>
      <TitlePage title={title} subTitle={title} />
      <div className="my-10 wrapper-layout">
        <div className="relative max-h-[500px] overflow-hidden">
          <img src={img} alt="" />
        </div>
        <div className="flex flex-col mt-8 gap-y-4">
          <h3 className="text-2xl font-semibold text-center">{title}</h3>
          <p className="px-10 text-base text-center mb-8 pb-8 border-b border-[#e4e4e4]">
            Lorem ipsum has become the industry standard for design mockups and
            prototypes. By adding a little bit of Latin to a mockup, you’re able
            to show clients a more complete version of your design without
            actually having to invest time and effort drafting copy.
          </p>
          <div className="flex items-center justify-center gap-x-2">
            <i className="mt-1 text-lg bi bi-tag-fill text-textColor"></i>
            <span className="text-base font-light cursor-pointer hover:text-primary">
              Chicken
            </span>
            <p>,</p>
            <span className="text-base font-light cursor-pointer hover:text-primary">
              Grill
            </span>
            <p>,</p>
            <span className="text-base font-light cursor-pointer hover:text-primary">
              Onion
            </span>
          </div>
          <div className="flex items-center justify-center gap-x-5">
            <span className="text-base font-light ">Share this on:</span>
            <div className="mr-2 cursor-pointer">
              <AiOutlineTwitter className="text-lg text-textPrimary hover:text-primary" />
            </div>
            <div className="mr-2 cursor-pointer">
              <GrFacebookOption className="text-lg text-textPrimary hover:text-primary" />
            </div>
            <div className="mr-2 cursor-pointer">
              <RiGoogleFill className="text-lg text-textPrimary hover:text-primary" />
            </div>
            <div className="mr-2 cursor-pointer">
              <RiLinkedinFill className="text-lg text-textPrimary hover:text-primary" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
