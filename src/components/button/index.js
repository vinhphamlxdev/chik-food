import React from "react";
import styled, { css } from "styled-components";
const StyledButton = styled.button`
  padding: 9px 30px 6px;
  transition: all 0.4s ease-in-out;
  outline: none;
  white-space: nowrap;
  background-color: ${(props) => props.theme.textPrimary};
  ${(props) =>
    props.large === true &&
    css`
      padding: 10px 24px;
    `};
  &:hover {
    ${(props) =>
      props.large === true &&
      css`
        background-color: #fff;
        color: ${(props) => props.theme.primary};
      `};
  }
`;
const Button = ({ className, large = false, children, onclick = () => {} }) => {
  return (
    <StyledButton
      large={large}
      onclick={onclick}
      className={`whitespace-nowrap hover:bg-primary text-white font-light rounded-full text-base ${className}`}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
