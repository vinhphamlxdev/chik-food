/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import TitlePage from "components/titlePage";
import { CgMenuGridO } from "react-icons/cg";
import ProductItem from "components/productItem";
import { ProductsData } from "data";
import Container from "components/container";

const ShopPage = () => {
  const [sort, setSort] = useState(1);
  const sortProduct = ProductsData.sort((a, b) => {
    if (sort === 1) {
      return a.salePrice - b.salePrice;
    } else if (sort === 2) {
      return b.salePrice - a.salePrice;
    }
  });

  const handleSort = (index) => {
    setSort(index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <TitlePage title="Products" subTitle="Products" />
      <div className=" wrapper-layout">
        <div className="flex my-8">
          <div className="w-2/6 pr-10">
            <button className="px-5 w-full py-2 text-left text-lg mb-4 font-medium text-white rounded-[30px] category-btn bg-primary">
              <span className="text-inherit">Category</span>
            </button>
            <div
              onClick={() => handleSort(1)}
              className={`pl-4 py-3 pr-3 relative after:left-0  after:absolute after:content-[''] after:top-2/4 after:-translate-y-2/4 after:w-2 after:h-2 after:bg-primary after:rounded-full text-base font-light border-b border-dashed border-[#e4e4e4] cursor-pointer text-textColor ${
                sort === 1 ? "text-primary" : ""
              }`}
            >
              Price, low to high
            </div>
            <div
              onClick={() => handleSort(2)}
              className={`pl-4 py-3 pr-3 relative after:left-0  after:absolute after:content-[''] after:top-2/4 after:-translate-y-2/4 after:w-2 after:h-2 after:bg-primary after:rounded-full text-base font-light border-b border-dashed border-[#e4e4e4] cursor-pointer text-textColor ${
                sort === 2 ? "text-primary" : ""
              }`}
            >
              Price, high to low
            </div>
          </div>
          <div className="">
            <div className="w-full all-product-list ">
              <div className="mb-8">
                <div className="flex items-center justify-center text-xl text-white rounded-full cursor-pointer bg-primary w-9 h-9">
                  <CgMenuGridO className="leading-[0px]" />
                </div>
              </div>
            </div>
            <div className="product-container">
              <div className="grid grid-cols-4 gap-x-3 gap-y-5">
                <ProductItem items={sortProduct} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ShopPage;
