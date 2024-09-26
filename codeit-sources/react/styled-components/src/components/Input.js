import styled from "styled-components";

const FONT_SIZES = {
  small: 16,
  medium: 20,
  large: 24,
};

const Input = styled.input`
  border: none;
  outline: none;
  display: block;
  padding: 8px 0;
  border-bottom: 1px solid #eeeeee;
  width: 100%;
  font-size: ${({ size }) => FONT_SIZES[size] ?? 18}px;
  margin-bottom: 16px;

  &::placeholder {
    color: #c4c5cd;
  }
  &:focus {
    border-bottom: 2px solid ${({ error }) => (error ? "#f44336" : "#7760b4")};
  }
`;

export default Input;
