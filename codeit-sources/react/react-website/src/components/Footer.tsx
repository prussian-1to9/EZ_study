import React from "react";
import styled from "styled-components";

import logo from "@assets/grayLogo.svg";
import facebookIcon from "@assets/facebook.svg";
import twitterIcon from "@assets/twitter.svg";
import instagramIcon from "@assets/instagram.svg";

import Container from "@components/Container";

const FooterContainer = styled.footer`
  padding: 20px 0 53px;
  color: #878787;
  background-color: #494949;
`;
const FooterLinks = styled.ul`
  padding: 0;
  color: #c4c4c4;
  list-style: none;

  & > * {
    display: inline-block;
    line-height: 1.64;
  }
  & > :not(:last-child) {
    margin-right: 30px;
  }
`;

const FooterInfo = styled.ul`
  padding: 0;
  margin-bottom: 36px;
  list-style: none;

  & > * {
    display: inline-block;
    line-height: 1.64;
  }

  & > :not(:last-child) {
    margin-right: 30px;
  }
`;

const FooterIcons = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FooterSNSIcons = styled.div`
  & :not(:last-child) {
    margin-right: 13px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterLinks>
          <li>코드댓 소개</li>
          <li>개인정보 취급방침</li>
          <li>사용자 이용약관</li>
          <li>자주 묻는 질문</li>
        </FooterLinks>
        <FooterInfo>
          <li>(주)코드댓</li>
          <li>대표 | 강영훈 </li>
          <li>개인정보보호책임자 | 강영훈 </li>
          <li>대표 번호 | 02-****-**** </li>
          <li>사업자번호 | ***-**-****</li>
          <li>통신판매업 | 제****-서울**-****호 </li>
          <li>주소 | 서울특별시 중구 청계천로 100 코드댓 </li>
        </FooterInfo>
        <FooterIcons>
          <img src={logo} alt="codethat" />
          <FooterSNSIcons>
            <img src={facebookIcon} alt="facebook icon" />
            <img src={twitterIcon} alt="twitter icon" />
            <img src={instagramIcon} alt="instagram icon" />
          </FooterSNSIcons>
        </FooterIcons>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
export { FooterContainer };
