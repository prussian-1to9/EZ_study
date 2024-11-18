import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import personIcon from "@assets/person.png";

const imgCSS = css`
  & img {
    width: 30px;
    height: 30px;
  }
`;
const UserMenuContainer = styled.div`
  position: relative;
  ${imgCSS}
`;

const IconButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  ${imgCSS}
`;

const Popups = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #fff;
  position: absolute;
  top: calc(100% + 25px);
  right: -10px;
  border: 1px solid #ebebeb;
  box-shadow: var(--box-shadow);
  border-radius: 5px 0 5px 5px;
  overflow: hidden;

  & a:hover {
    text-decoration: none;
  }
`;
const Popup = styled.li<{ disabled?: true | undefined }>`
  padding: 15px 19px;
  font-family: var(--noto-sans);

  &:hover {
    background-color: #f4f4f4;
    cursor: pointer;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #fff;
      color: #c4c4c4;
      user-select: none;
      cursor: default;
    `}
`;

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setIsOpen((nextIsOpen) => !nextIsOpen);
    },
    []
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => setIsOpen(false);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <UserMenuContainer>
      <IconButton onClick={handleButtonClick}>
        <img src={personIcon} alt="유저 메뉴" />
      </IconButton>

      {isOpen && (
        <Popups>
          <Link to="/wishlist">
            <Popup>위시리스트</Popup>
          </Link>
          <Popup disabled={true}>회원가입</Popup>
          <Popup disabled={true}>로그인</Popup>
        </Popups>
      )}
    </UserMenuContainer>
  );
};

export default UserMenu;
