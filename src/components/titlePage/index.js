import React from "react";
import styled from "styled-components";
const StyledTitle = styled.div`
  & .title {
    color: ${(props) => props.theme.textTitle};
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  & span {
    color: ${(props) => props.theme.textTitle};
    cursor: pointer;
  }
`;
const TitlePage = ({ title, subTitle, collection }) => {
  return (
    <StyledTitle className="py-10 text-center px-3 bg-[#f4f4f4]">
      <h1 className="title">{title}</h1>
      {collection && <h1 className="title">Collections</h1>}
      <div className="flex justify-center gap-x-3">
        <span>Home</span>
        <div className="text-xl font-light">/</div>
        <span>{subTitle}</span>
      </div>
    </StyledTitle>
  );
};

export default TitlePage;
