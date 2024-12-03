import React from "react";
import styled from "styled-components";

import landingImg from "@assets/landing.svg";
import { media } from "@utils/media";
import Button from "@components/Button";
import Container from "@components/Container";
import Lined from "@components/Lined";

const HomPageBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(
    135deg,
    #f9f9f9 48%,
    #ebebeb 48%,
    #ebebeb 78%,
    #f9f9f9 78%
  );
`;
const HomePageContainer = styled(Container)`
  display: flex;
  margin: 120px auto 226px;

  ${media.tablet`
    flex-direction: column-reverse;
    margin: 60px auto 226px;
  `}
`;

const HomePageFigure = styled.div`
  flex: 1 1;
  padding: 20px;
  text-align: center;

  ${media.tablet`
    margin-bottom: 40px;  
  `}

  & img {
    width: 100%;
    max-width: 418px;
  }
`;

const HomePageContext = styled.div`
  display: flex;
  flex: 1 1;
  flex-direction: column;
  justify-content: center;
  margin-right: 100px;

  @media (max-width: 840px) {
    margin-right: 0;
  }
`;
const HomePageHeading = styled.h1`
  margin: 15px 0;
  font-weight: 500;
  line-height: 1.39;
`;
const HomePageText = styled.p`
  margin: 15px 0 25px;
  font-size: 18px;
  line-height: 1.61;
  color: #878787;
  text-align: left;
  letter-spacing: normal;
`;

function HomePage() {
  return (
    <>
      <HomPageBackground />
      <HomePageContainer>
        <HomePageContext>
          <HomePageHeading>
            <Lined>코딩이 처음이라면,</Lined>
            <br />
            <b>코드댓</b>
          </HomePageHeading>
          <HomePageText>
            11만 명이 넘는 비전공자, 코딩 입문자가 코드댓 무제한 멤버십을
            선택했어요.
            <br />
            지금 함께 시작해보실래요?
          </HomePageText>
          <div>
            <Button>지금 시작하기</Button>
          </div>
        </HomePageContext>

        <HomePageFigure>
          <img src={landingImg} alt="그래프, 모니터, 윈도우, 자물쇠, 키보드" />
        </HomePageFigure>
      </HomePageContainer>
    </>
  );
}

export default HomePage;
