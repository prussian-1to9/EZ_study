import React from "react";
import styled from "styled-components";

import warnIcon from "@assets/warn.svg";

const WarnConatiner = styled.div`
  text-align: center;

  & > img {
    display: block;
    margin: 0 auto;
  }
`;
const WarnTitle = styled.h2`
  margin: 20px auto 3px;
  font-size: 20px;
  font-weight: 500;
`;
const WarnDescription = styled.p`
  margin: 0;
  font-weight: 500;
  line-height: 2.07;
  color: #878787;
`;

const Warn: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <WarnConatiner>
      <img src={warnIcon} alt="경고" />
      <WarnTitle>{title}</WarnTitle>
      <WarnDescription>{description}</WarnDescription>
    </WarnConatiner>
  );
};

const WarnEmpty = styled(Warn)`
  margin: 40px auto;
`;

export default Warn;
export { WarnTitle, WarnDescription, WarnEmpty };
