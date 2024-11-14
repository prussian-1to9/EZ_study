import React from "react";
import styled from "styled-components";
import classNames from "classnames";

const StyledDiv = styled.div`
  width: 100%;
  max-width: 840px;
  margin: 0 auto;

  @media (max-width: 840px) {
    padding: 0 calc(14px * 5);
  }
`;

function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <StyledDiv className={classNames(className)}>{children}</StyledDiv>;
}

export default Container;
