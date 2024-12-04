import React, { useState } from "react";
import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import searchIcon from "@assets/search.svg";
import { getQuestions } from "@api/index";

import SearchBar from "@components/ListPage/SearchBar";
import DateText from "@components/Question/DateText";
import ListPage from "@components/ListPage/ListPage";
import Count from "@components/ListPage/Count";
import { WarnEmpty } from "@components/Warn";
import Card from "@components/Card";
import Avatar from "@components/User/Avatar";

const QuestionContainer = styled.div`
  margin-top: 20px;
`;
const QuestionCard = styled(Card)`
  display: flex;
  align-items: center;
  padding: 19px 30px 20px;

  &:not(:last-child) {
    margin-bottom: 11px;
  }

  & a {
    flex: 1 1;
  }
  & ${Count} {
    margin-left: 5px;
    color: #fe92ab;
  }
`;
const QuestionItemTitle = styled.p`
  display: flex;
  align-items: center;
  margin: 0 auto 10px;
  font-size: 14px;
  font-weight: 500;
  color: #494949;

  & a {
    font-family: var(--notosans);
  }
`;
const QuestionItemDate = styled.p`
  margin: 0;
  font-size: 12px;
  color: #c4c4c4;
`;
const QuestionWriter = styled.div`
  flex: none;
  margin-left: 30px;
`;

function QuestionItem({ question }: { question: Question }) {
  return (
    <QuestionCard key={question.title}>
      <Link to={`/questions/${question.id}`}>
        <QuestionItemTitle>
          {question.title}
          {question.answers.length > 0 && (
            <Count>[{question.answers.length}]</Count>
          )}
        </QuestionItemTitle>
        <QuestionItemDate>
          <DateText value={question.createdAt} />
        </QuestionItemDate>
      </Link>
      <QuestionWriter>
        <Avatar
          photo={question.writer.profile.photo}
          name={question.writer.name}
        />
      </QuestionWriter>
    </QuestionCard>
  );
}

function QuestionListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initKeyword = searchParams.get("keyword");
  const [keyword, setKeyword] = useState(initKeyword ?? "");

  const questions = getQuestions().filter((question: Question) => {
    if (!keyword) return question;
    return question.title.includes(keyword);
  });

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setSearchParams(searchParams);
  };

  return (
    <>
      <Helmet>
        <title>Codethat - 커뮤니티</title>
      </Helmet>
      <ListPage
        variant="community"
        title="커뮤니티"
        description="코드댓의 2만 수강생들과 함께 공부해봐요."
      >
        <SearchBar onSubmit={handleSubmit}>
          <input
            name="keyword"
            value={keyword}
            placeholder="검색으로 질문 찾기"
            onChange={handleKeywordChange}
          />
          <button type="submit">
            <img src={searchIcon} alt="검색" />
          </button>
        </SearchBar>

        <Count>총 {questions.length}개 질문</Count>

        {questions.length > 0 ? (
          <QuestionContainer>
            {questions.map((question: Question) => (
              <QuestionItem key={question.id} question={question} />
            ))}
          </QuestionContainer>
        ) : (
          <WarnEmpty
            title="조건에 맞는 질문이 없어요."
            description="올바른 검색어가 맞는지 다시 한 번 확인해 주세요."
          />
        )}
      </ListPage>
    </>
  );
}

export default QuestionListPage;
