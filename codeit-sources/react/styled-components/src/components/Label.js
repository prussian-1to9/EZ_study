import styled from "styled-components";

const FONT_SIZES = {
  small: 16,
  medium: 20,
  large: 24,
};

const Label = styled.label`
  font-size: ${({ size }) => FONT_SIZES[size] ?? FONT_SIZES.medium}px;
  font-weight: 500;
  color: #e1c6f7;
`;

export default Label;
