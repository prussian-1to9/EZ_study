import styled, { keyframes } from "styled-components";

const SIZES = {
  large: 24,
  medium: 20,
  small: 16,
};

const rotate = keyframes`
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.img`
  animation: ${rotate} 0.5s linear infinite;
  height: ${({ size }) => SIZES[size] ?? 18}px;
  display: ${({ visible }) => (visible ? "inline-block" : "none")};
`;

export default Spinner;
