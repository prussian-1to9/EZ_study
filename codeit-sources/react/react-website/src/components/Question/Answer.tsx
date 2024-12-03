import React from "react";
import styled from "styled-components";

import Card from "@components/Card";
import Writer from "./Writer";
import DateText from "./DateText";

const AnswerCard = styled(Card)`
  padding: 30px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const AnswerDate = styled.div`
  align-self: flex-end;
  font-size: 12px;
  font-weight: 500;
  color: #c4c4c4;
`;
const AnswerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const Answer = ({ answer }: { answer: Answer }) => {
  return (
    <AnswerCard key={answer.id}>
      <p dangerouslySetInnerHTML={{ __html: answer.content }} />
      <AnswerInfo>
        <AnswerDate>
          <DateText value={answer.createdAt} />
        </AnswerDate>
        <Writer writer={answer.writer} />
      </AnswerInfo>
    </AnswerCard>
  );
};

export default Answer;
