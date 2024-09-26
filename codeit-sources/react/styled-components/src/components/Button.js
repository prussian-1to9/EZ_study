import styled from "styled-components";
//import nailImg from "./nail.png";

const SIZES = {
  large: 24,
  medium: 20,
  small: 16,
};

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const StyledButton = styled.button`
  background-color: #6750a4;
  border: none;
  border-radius: ${({ round }) => (round ? "9999px" : "3px")};
  color: #ffffff;
  font-size: ${({ size }) => SIZES[size] ?? SIZES["medium"]}px;
  padding: 16px;

  ${Icon} {
    margin-right: 4px;
  }
  &:hover,
  &:active {
    background-color: #463770;
  }
`;

export default function Button({ children, ...buttonProps }) {
  return (
    <StyledButton {...buttonProps}>
      {/* <Icon src={nailImg} alt="nail" /> */}
      {children}
    </StyledButton>
  );
}
