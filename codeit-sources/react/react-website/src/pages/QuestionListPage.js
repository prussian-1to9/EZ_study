import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import searchIcon from "@assets/search.svg";
import { getQuestions } from "@api";

import SearchBar from "@components/SearchBar";
import DateText from "@components/DateText";
import ListPage from "@components/ListPage";
import Warn from "@components/Warn";
import Card from "@components/Card";
import Avatar from "@components/Avatar";
import styles from "@pages/QuestionListPage.module.css";

function QuestionItem({ question }) {
  return (
    <Card className={styles.questionItem} key={question.title}>
      <Link to={`/questions/${question.id}`} className={styles.info}>
        <p className={styles.title}>
          {question.title}
          {question.answers.length > 0 && (
            <span className={styles.count}>[{question.answers.length}]</span>
          )}
        </p>
        <p className={styles.date}>
          <DateText value={question.createdAt} />
        </p>
      </Link>
      <div className={styles.writer}>
        <Avatar
          photo={question.writer.profile.photo}
          name={question.writer.name}
        />
      </div>
    </Card>
  );
}

function QuestionListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initKeyword = searchParams.get("keyword");
  const [keyword, setKeyword] = useState(initKeyword ?? "");

  const questions = getQuestions().filter((question) => {
    if (!keyword) return question;
    return question.title.includes(keyword);
  });

  const handleKeywordChange = (e) => setKeyword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(searchParams);
  };

  return (
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

      <p className={styles.count}>총 {questions.length}개 질문</p>

      {questions.length > 0 ? (
        <div className={styles.questionList}>
          {questions.map((question) => (
            <QuestionItem key={question.id} question={question} />
          ))}
        </div>
      ) : (
        <Warn
          className={styles.emptyList}
          title="조건에 맞는 질문이 없어요."
          description="올바른 검색어가 맞는지 다시 한 번 확인해 주세요."
        />
      )}
    </ListPage>
  );
}

export default QuestionListPage;
