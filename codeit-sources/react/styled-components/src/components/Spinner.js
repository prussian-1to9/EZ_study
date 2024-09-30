import styled, { keyframes } from "styled-components";
import SpinnerIcon from "./icons/spinner.svg";

const SIZES = {
  large: 24,
  medium: 20,
  small: 16,
};

const BaseSpinner = ({ ...spinnerProps }) => (
  <img src={SpinnerIcon} alt="loader" {...spinnerProps} />
);

const rotate = keyframes`
  100% { transform: rotate(360deg); }
`;

const Spinner = styled(BaseSpinner)`
  animation: ${rotate} 0.5s linear infinite;
  height: ${({ size }) => SIZES[size] ?? 18}px;
  display: ${({ visible }) => (visible ? "inline-block" : "none")};
`;

export default Spinner;
