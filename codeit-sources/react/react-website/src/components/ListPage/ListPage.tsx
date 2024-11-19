import React from "react";
import styled from "styled-components";

import Container from "@components/Container";
import { ICON, THUMB_CSS } from "./constants";

const StyledContainer = styled(Container)`
  margin-top: -20px;
  margin-bottom: 100px;
`;

const ListTitleContent = styled.div`
  & > h1 {
    margin: 0 0 5px;
    font-size: 22px;
    font-weight: bold;
  }

  & > p {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
  }
`;

const ListThumb = ({
  variant,
  children,
}: {
  variant: string;
  children?: React.ReactNode;
}) => {
  const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 38px 0 58px;

    & > img {
      height: 44px;
      margin-right: 30px;
    }
    ${THUMB_CSS[variant] || THUMB_CSS.catalog}
  `;
  return <StyledDiv>{children}</StyledDiv>;
};

const ListPage = ({
  variant = "catalog",
  title = "",
  description = "",
  children,
}: {
  variant: "catalog" | "community";
  title: string;
  description: string;
  children?: React.ReactNode;
}) => {
  const icon = ICON[variant] || ICON.catalog;
  return (
    <>
      <ListThumb variant={variant}>
        <img src={icon.src} alt={icon.alt} />
        <ListTitleContent>
          <h1>{title}</h1>
          <p>{description}</p>
        </ListTitleContent>
      </ListThumb>
      <StyledContainer>{children}</StyledContainer>
    </>
  );
};

export default ListPage;
