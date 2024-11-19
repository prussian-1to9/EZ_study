import styled from "styled-components";
import Container from "@components/Container";

const CourseHeader = styled.div`
  background-color: #fff;
  border-top: 10px solid #000;

  & h1 {
    margin: 10px auto 20px;
    font-size: 22px;
    font-weight: bold;
    color: #545454;
    text-align: center;
  }

  & p {
    padding: 11px 68px;
    margin: 20px 0 0;
    font-size: 12px;
    color: #878787;
    background-color: #f9f9f9;
    border: solid 2px #f4f4f4;
    border-radius: 5px;
  }
  & ${Container} {
    padding: 65px 10px 20px;
    text-align: center;
  }
`;

export default CourseHeader;
