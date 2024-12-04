import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Card from "@components/Card";
import CourseThumb from "./CourseThumb";
import Tags from "./Tags";

const DIFFICULTY = ["입문", "초급", "중급", "고급"];

const CourseContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 134px;
  padding: 20px 20px 30px;
  background-color: #f9f9f9;
  border-top: solid 1px #ebebeb;

  & > h2 {
    margin: 0 0 10px;
    overflow: hidden;
    font-size: 14px;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > p {
    display: -webkit-box;
    margin: 0 0 10px;
    overflow: hidden;
    font-size: 12px;
    font-weight: 300;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`;

const CourseItem = ({ course }: { course: Course }) => {
  const showSummary = course.summary && course.title !== course.summary;
  const difficulty = DIFFICULTY[course.difficulty || 0];

  return (
    <Card>
      <CourseThumb course={course} />

      <CourseContent>
        <h2>
          <Link to={`/courses/${course.slug}`}>{course.title}</Link>
        </h2>
        <p>{showSummary && course.summary}</p>
        <div>
          <Tags values={[course.language, difficulty]} />
        </div>
      </CourseContent>
    </Card>
  );
};

export default CourseItem;
