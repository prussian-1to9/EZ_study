import styled, { css } from "styled-components";

const FONT_SIZES = {
  large: 24,
  medium: 20,
  small: 16,
};
const fontSize = css`
  font-size: ${({ size }) => FONT_SIZES[size] ?? 18}px;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const StyledButton = styled.button`
  width: 100%;
  background-color: #6500c3;
  border: none;
  color: #ffffff;
  cursor: pointer;
  ${fontSize}
  padding: 16px;
  margin: 8px 0;
  border-radius: ${({ round }) => (round ? "9999px" : "8px")};

  ${Icon} {
    margin-right: 4px;
  }
  &:hover,
  &:active {
    background-color: #7760b4;
  }
`;

export default function Button({ children, ...buttonProps }) {
  return (
    <StyledButton {...buttonProps}>
      {buttonProps.icon && <Icon src={buttonProps.icon} alt="icon" />}
      {children}
    </StyledButton>
  );
}
