import styled from "styled-components";
import Button from "./Button";
import KakaoImg from "./icons/kakao.svg";

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fee500;
  color: rgba(0, 0, 0, 0.8);

  ${Icon} {
    margin-right: 8px;
  }

  &:hover {
    background-color: #fee500;
  }
`;

export default function KakaoButton({ children, ...buttonProps }) {
  return (
    <StyledButton {...buttonProps}>
      <Icon src={KakaoImg} alt="kakao" />
      {children}
    </StyledButton>
  );
}
