import TitlePage from "components/titlePage";
import React from "react";

const Blog = () => {
  return (
    <>
      <TitlePage title="Onion topping grill" subTitle="Onion topping grill" />
      <div className="wrapper-layout">
        <div className="relative overflow-hidden">
          <img
            src="https://cdn.shopify.com/s/files/1/0016/3387/8116/articles/blog11.jpg?v=1542612464"
            alt=""
          />
        </div>
        <div className="flex flex-col mt-8 gap-y-4">
          <h3 className="text-2xl font-semibold text-center">
            Onion topping grill
          </h3>
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
        </div>
      </div>
    </>
  );
};

export default Blog;
