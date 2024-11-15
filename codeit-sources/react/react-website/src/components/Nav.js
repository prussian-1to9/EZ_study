import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import UserMenu from "./UserMenu";
import logoImg from "../assets/logo.svg";
import styles from "./Nav.module.css";

const NavContainer = styled.nav`
  position: relative;
  z-index: 1;
  padding: 15px 0;
  background-color: #fff;
  box-shadow: var(--box-shadow);
`;

const getLinkStyle = ({ isActive }) => {
  // return react inline-style object
  return {
    textDecoration: isActive ? "underline" : undefined,
  };
};
const Nav = () => {
  return (
    <NavContainer>
      <Container className={styles.container}>
        <Link to="/">
          <img src={logoImg} alt="Codethat Logo" />
        </Link>
        <ul className={styles.menu}>
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
        </ul>
      </Container>
    </NavContainer>
  );
};

export default Nav;
export { NavContainer };
