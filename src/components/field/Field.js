import React from "react";
import styled from "styled-components";
const FieldStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 4px;
  margin-bottom: 16px;
`;
const Field = ({ children }) => {
  return <FieldStyles>{children}</FieldStyles>;
};

export default Field;
