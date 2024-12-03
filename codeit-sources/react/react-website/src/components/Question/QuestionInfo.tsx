import React from "react";
import styled from "styled-components";

import Writer from "./Writer";
import DateText from "./DateText";

const QuestionInfoContainer = styled.div`
  display: flex;
  margin-bottom: 18px;
`;
const QuestionContent = styled.div`
  flex: 1;
`;
const QuestionTitle = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #494949;

  & > span {
    margin-left: 5px;
    color: #fe92ab;
  }
`;
const QuestionDate = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #c4c4c4;
`;

const QuestionInfo = ({ question }: { question: Question }) => {
  return (
    <QuestionInfoContainer>
      <QuestionContent>
        <QuestionTitle>
          {question.title}
          {question.answers.length > 0 && (
            <span>{question.answers.length}</span>
          )}
        </QuestionTitle>
        <QuestionDate>
          <DateText value={question.createdAt} />
        </QuestionDate>
      </QuestionContent>
      <Writer userType="author" writer={question.writer} />
    </QuestionInfoContainer>
  );
};
export default QuestionInfo;
