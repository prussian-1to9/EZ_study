import React from "react";
import classNames from "classnames";
import styled from "styled-components";

const StyledDiv = styled.div`
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: var(--box-shadow);
`;
function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <StyledDiv className={classNames(className)}>{children}</StyledDiv>;
}

export default Card;
