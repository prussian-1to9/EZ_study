import React from "react";
import styled from "styled-components";

const StyledUL = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  & > li {
    display: inline-block;
    padding: 2px 6px 3px;
    font-size: 12px;
    color: #878787;
    background-color: #ebebeb;
    border-radius: 5px;
    opacity: 0.8;
  }
  & > li:not(:last-child) {
    margin-right: 10px;
  }
`;

function Tags({ values }: { values: string[] }) {
  return (
    <StyledUL>
      {values.map((value) => (
        <li key={value}>{value}</li>
      ))}
    </StyledUL>
  );
}

export default Tags;
