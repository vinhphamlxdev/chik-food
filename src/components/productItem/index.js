import React from "react";
import Icon from "components/Icon";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  addToCart,
  setProductView,
  setShowQuickView,
} from "redux-toolkit/cart/cartSlice";
const StyledProducts = styled.div`
  transition: 0.5s all;
  border: 1px solid #f4f4f4;
  overflow: hidden;
  &:hover .products-content {
    background-color: ${(props) => props.theme.primary};
  }
  &:hover .product-star,
  &:hover .price,
  &:hover .title {
    color: #fff;
  }
  &:hover {
    border: 1px solid ${(props) => props.theme.primary};
  }
  & .add-cart-list {
    right: -35px;
    transition: 0.3s all;
  }
  &:hover .add-cart-list {
    right: 2px;
  }
  & .product-img {
    cursor: pointer;
    & .product-add {
      position: absolute;
      top: 0;
      transform: translate(100%);
      transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      opacity: 0;
      visibility: hidden;
    }
    &:hover .product-add {
      opacity: 1;
      visibility: visible;
      transform: translate(0);
    }
  }
  transition: 0.5s all;
  & .title {
    color: ${(props) => props.theme.textPrimary};
  }
  & .price {
    color: ${(props) => props.theme.primary};
  }
`;
const ProductItem = ({ items = [] }) => {
  const dispatch = useDispatch();
  const handleShowModal = (product) => {
    dispatch(setShowQuickView(true));
    dispatch(
      setProductView({
        id: product.id,
        title: product.title,
        salePrice: product.salePrice,
        img: [...product.img],
      })
    );
  };
  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        id: product.id,
        img: [...product.img],
        title: product.title,
        salePrice: product.salePrice,
      })
    );
    swal("Sản phẩm thêm vào giỏ hàng thành công!", {
      icon: "success",
    });
  };
  const handleAddWishlist = () => {
    swal({
      text: "Chức năng chưa được cập nhật!",
      icon: "warning",
      dangerMode: true,
    });
  };
  return (
    <>
      {items.map((item, index) => {
        const { id, img = [], title, salePrice } = item;
        return (
          <StyledProducts key={id} className="relative products-item">
            <div className="absolute add-cart-list   flex z-20 flex-col gap-y-[2px] top-[2px]">
              <Icon onClick={() => handleAddToCart(item)}>
                <i className="text-sm bi text-inherit leading-[0px] bi-cart-plus-fill"></i>
              </Icon>
              <Icon onClick={() => handleShowModal(item)}>
                <i className="text-sm  text-inherit leading-[0px]  bi bi-eye"></i>
              </Icon>
              <Icon onClick={handleAddWishlist}>
                <i className="text-sm  text-inherit leading-[0px]  bi bi-heart"></i>
              </Icon>
            </div>
            <div className="relative overflow-hidden product-img">
              <div className="product-add">
                <img src={img[1]} alt="" />
              </div>
              <img src={img[0]} alt="" />
            </div>
            <div className="px-[10px] products-content bg-[#f4f4f4] py-5 flex flex-col items-center">
              <span className="text-sm transition-5 cursor-pointer font-semibold mb-4 tracking-[0px] title">
                {title}
              </span>
              <div className="text-xl font-medium transition-5 price">
                ${salePrice.toLocaleString()}
              </div>
              <div className="flex py-2">
                {Array(5)
                  .fill(0)
                  .map((item, index) => (
                    <i
                      key={index}
                      className="bi text-xs font-light product-star leading-[0px] text-textPrimary bi-star"
                    ></i>
                  ))}
              </div>
            </div>
          </StyledProducts>
        );
      })}
    </>
  );
};

export default ProductItem;
