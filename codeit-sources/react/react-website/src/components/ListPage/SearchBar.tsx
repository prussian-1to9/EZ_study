import styled from "styled-components";

const SearchBar = styled.form`
  display: flex;
  height: 40px;
  box-shadow: var(--box-shadow);

  & input {
    flex: 1 1;
    padding: 12px 20px;
    font-size: 14px;
    font-weight: 500;
    border: none;
    border-radius: 5px 0 0 5px;
    outline: none;
  }
  & input::placeholder {
    color: #878787;
  }

  & button[type="submit"] {
    flex: none;
    padding: 8px 10px;
    color: #fff;
    cursor: pointer;
    background-color: #545454;
    border: none;
    border-radius: 0 5px 5px 0;
    outline: none;
  }

  & button[type="submit"] img {
    width: 24px;
    height: 24px;
  }
`;

export default SearchBar;
