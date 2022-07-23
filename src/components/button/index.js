import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  padding: 9px 30px 6px;
  transition: all 0.4s ease-in-out;
  outline: none;
  white-space: nowrap;
  background-color: ${(props) => props.theme.textPrimary};
`;
const Button = ({ className, children, onclick = () => {} }) => {
  return (
    <StyledButton
      onclick={onclick}
      className={`whitespace-nowrap hover:bg-primary text-white font-light rounded-full text-base ${className}`}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
