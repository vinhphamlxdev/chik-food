import { LoadingSpinner } from "components/loading";
import React from "react";
import styled, { css } from "styled-components";
const StyledButton = styled.button`
  padding: 9px 30px 6px;
  transition: all 0.4s ease-in-out;
  outline: none;
  white-space: nowrap;
  height: ${(props) => props.height || ""};
  display: flex;
  justify-content: center;
  align-items: center;
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
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
const Button = ({
  className,
  large = false,
  children,
  onClick = () => {},
  type = "button",
  ...props
}) => {
  let { isLoading, to } = props;
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;

  return (
    <StyledButton
      type={type}
      large={large}
      onClick={onClick}
      {...props}
      className={`whitespace-nowrap hover:bg-primary text-white font-light rounded-full text-base ${className}`}
    >
      {child}
    </StyledButton>
  );
};

export default Button;
