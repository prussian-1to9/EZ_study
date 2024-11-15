import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Outlet } from "react-router-dom";
import "./App.module.css";
import "./App.font.css";

import Nav, { NavContainer } from "@components/Nav";
import Footer, { FooterContainer } from "@components/Footer";

const GlobalStyle = createGlobalStyle`
  ${FooterContainer}, ${NavContainer} {
    flex: none;
  }
`;

const Body = styled.div`
  position: relative;
  flex-grow: 1;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Body>
        <Outlet />
      </Body>
      <Footer />
    </>
  );
}

export default App;
