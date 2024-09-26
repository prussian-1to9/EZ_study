import styled from "styled-components";

const FONT_SIZES = {
  small: 16,
  medium: 20,
  large: 24,
};

const Input = styled.input`
  border: 2px solid ${({ error }) => (error ? "#f44336" : "#eeeeee")};
  border-radius: ${({ round }) => (round ? 9999 : 4)}px;
  outline: none;
  font-size: ${({ size }) => FONT_SIZES[size] ?? FONT_SIZES.medium}px;
  padding: 16px;

  &:focus {
    ${({ error }) => (error ? "#f44336" : "#7760b4")};
  }
`;

export default Input;
