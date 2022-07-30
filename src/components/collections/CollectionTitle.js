import React from "react";
import styled from "styled-components";
import star from "assets/chickenStar.webp";
import chicken from "assets/chicken.webp";
const StyledCollection = styled.div`
  .collection-title {
    color: ${(props) => props.theme.textTitle};
  }
`;
const CollectionTitle = ({ className, children, title, isStar }) => {
  return (
    <StyledCollection className={`mb-10 text-center ${className}`}>
      <h2 className="text-[27px] font-bold mb-4 collection-title">{title}</h2>
      <div className="relative flex justify-center text-center">
        <img src={`${isStar ? `${star}` : `${chicken}`}`} alt="" />
        {children}
      </div>
    </StyledCollection>
  );
};

export default CollectionTitle;
