import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  padding-bottom: 4px;

  /* thick underline */
  box-shadow: inset 0 -14px #ebebeb;
`;

function Lined({ children }: { children: React.ReactNode }) {
  return <StyledSpan>{children}</StyledSpan>;
}

export default Lined;
