import React from "react";
import TitlePage from "components/titlePage";
import { CgMenuGridO } from "react-icons/cg";

const ShopPage = () => {
  return (
    <>
      <TitlePage title="Products" subTitle="Products" />
      <div className=" wrapper-layout">
        <div className="flex my-8">
          <div className="w-1/5 pr-10">
            <button className="px-5 w-full py-2 text-left text-lg mb-4 font-medium text-white rounded-[30px] category-btn bg-primary">
              <span className="text-inherit">Category</span>
            </button>
          </div>
          <div className="w-full all-product-list ">
            <div className="mb-8">
              <div className="flex items-center justify-center text-xl text-white rounded-full cursor-pointer bg-primary w-9 h-9">
                <CgMenuGridO className="leading-[0px]" />
              </div>
            </div>
          </div>
          <div className="product-container">
            <div className="grid grid-cols-4 gap-x-3 gap-y-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
