import styled from "styled-components";
import { useParams, Navigate } from "react-router-dom";
import { getQuestionById } from "@api";

import Container from "@components/Container";
import Lined from "@components/Lined";
import Warn from "@components/Warn";

import Answer from "@components/Question/Answer";
import QuestionInfo from "@components/Question/QuestionInfo";

const QuestionContent = styled(Container)`
  padding-top: 39px;
  padding-bottom: 33px;
  background-color: #fff;
`;
const QuestionContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
`;
const AnswerContainer = styled(Container)`
  margin: 30px auto 80px;

  & > h2 {
    margin: 0 0 22px;
    font-size: 18px;
    font-weight: 500;
    color: #878787;
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export default function QuestionPage() {
  const { questionId } = useParams();
  const question = getQuestionById(questionId);

  if (!question) return <Navigate to="/questions" />;

  return (
    <>
      <QuestionContent>
        <QuestionContainer>
          <QuestionInfo question={question} />
          <p dangerouslySetInnerHTML={{ __html: question.content }} />
        </QuestionContainer>
      </QuestionContent>

      <AnswerContainer>
        <h2>
          <Lined>{question.answers.length}개 답변</Lined>
        </h2>

        {question.answers.length > 0 ? (
          question.answers.map((answer) => <Answer answer={answer} />)
        ) : (
          <Warn
            title="답변을 기다리고 있어요."
            description="이 질문의 첫 번째 답변을 달아주시겠어요?"
          />
        )}
      </AnswerContainer>
    </>
  );
}
