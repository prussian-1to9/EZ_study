import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import logoImg from "@assets/logo.svg";

import Container from "@components/Container";
import UserMenu from "@components/UserMenu";

const NavBar = styled.nav`
  position: relative;
  z-index: 1;
  padding: 15px 0;
  background-color: #fff;
  box-shadow: var(--box-shadow);

  & img {
    vertical-align: middle;
  }
`;

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;

  & > li:not(:last-child) {
    margin-right: 30px;
  }

  & a:hover,
  & a:active {
    text-decoration: underline;
  }
`;

// return react inline-style object
const getLinkStyle = ({ isActive }: { isActive?: boolean }) => {
  return {
    textDecoration: isActive ? "underline" : undefined,
  };
};

const Nav = () => {
  return (
    <NavBar>
      <NavContainer>
        <Link to="/">
          <img src={logoImg} alt="Codethat Logo" />
        </Link>

        <NavMenu>
          <li>
            <NavLink to="/courses" style={getLinkStyle}>
              카탈로그
            </NavLink>
          </li>
          <li>
            <NavLink to="/questions" style={getLinkStyle}>
              커뮤니티
            </NavLink>
          </li>
          <li>
            <UserMenu />
          </li>
        </NavMenu>
      </NavContainer>
    </NavBar>
  );
};

export default Nav;
export { NavContainer };
