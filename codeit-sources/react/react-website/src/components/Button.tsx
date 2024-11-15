import React from "react";
import styled, { css } from "styled-components";

import classNames from "classnames";

/** @FIXME : .round 처리 */
const ButtonStyle = css`
  padding: 13px 41px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  background-color: #494949;
  border: none;
  border-radius: 5px;
  outline: none;

  &.round {
    padding: 9px 22px;
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    background-color: #494949;
    border-radius: 9999px;
  }
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;
const StyledDiv = styled.div`
  ${ButtonStyle}
  display: inline-block;
`;

function Button({
  variant,
  className,
  as,
  ...restProps
}: {
  variant?: string;
  className?: string;
  as?: "button" | "div";
  [key: string]: any;
}) {
  /** @FIXME : variant handling (기존 : ariant && styles[variant] 구문 사용) */
  if (as === "div") {
    return (
      <StyledDiv {...restProps} className={classNames(variant, className)} />
    );
  }

  return (
    <StyledButton {...restProps} className={classNames(variant, className)} />
  );
}

export default Button;
