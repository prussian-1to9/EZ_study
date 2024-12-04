import React, { useState } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import searchIcon from "@assets/search.svg";
import { getCourses } from "@api/index";

import SearchBar from "@components/ListPage/SearchBar";
import ListPage from "@components/ListPage/ListPage";
import Count from "@components/ListPage/Count";
import CourseItem from "@components/Course/CourseItem";
import { WarnEmpty } from "@components/Warn";

const CourseList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 840px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function CourseListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initKeyword = searchParams.get("keyword");
  const [keyword, setKeyword] = useState(initKeyword ?? "");
  const courses = getCourses(keyword);

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission
    setSearchParams(keyword ? { keyword } : {});
  };

  return (
    <>
      <Helmet>
        <title>Codethat - 카탈로그</title>
      </Helmet>
      <ListPage
        variant="catalog"
        title="모든 코스"
        description="자체 제작된 코스들로 기초를 쌓으세요."
      >
        <SearchBar onSubmit={handleSubmit}>
          <input
            name="keyword"
            value={keyword}
            onChange={handleKeywordChange}
            placeholder="검색으로 코스 찾기"
          ></input>
          <button type="submit">
            <img src={searchIcon} alt="검색" />
          </button>
        </SearchBar>

        <Count>총 {courses.length}개 코스</Count>

        {courses.length > 0 ? (
          <CourseList>
            {courses.map((course: Course) => (
              <CourseItem key={course.id} course={course} />
            ))}
          </CourseList>
        ) : (
          <WarnEmpty
            title="조건에 맞는 코스가 없어요."
            description="올바른 검색어가 맞는지 다시 한 번 확인해 주세요."
          />
        )}
      </ListPage>
    </>
  );
}

export default CourseListPage;
