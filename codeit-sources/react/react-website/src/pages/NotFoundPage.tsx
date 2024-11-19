import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "@components/Button";
import Container from "@components/Container";
import Warn, { WarnTitle, WarnDescription } from "@components/Warn";

const StyledContainer = styled(Container)`
  margin: 80px auto;

  ${WarnTitle} {
    font-size: 24px;
  }
  ${WarnDescription} {
    font-size: 18px;
    line-height: 1.61;
  }
`;
const WarnContent = styled.div`
  margin: 30px auto;
  text-align: center;
`;

function NotFoundPage() {
  return (
    <StyledContainer>
      <Warn
        title="존재하지 않는 페이지에요."
        description="올바른 주소가 맞는지 다시 한 번 확인해 주세요."
      />
      <WarnContent>
        <Link to="/">
          <Button as="div">홈으로 가기</Button>
        </Link>
      </WarnContent>
    </StyledContainer>
  );
}

export default NotFoundPage;
