import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 840px;
  margin: 0 auto;

  @media (max-width: 840px) {
    padding: 0 calc(14px * 5);
  }
`;

export default Container;
