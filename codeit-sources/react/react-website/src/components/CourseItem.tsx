import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import getCourseColor from "@utils/getCourseColor";

import Card from "@components/Card";
import CourseIcon from "@components/CourseIcon";
import Tags from "@components/Tags";

const DIFFICULTY = ["입문", "초급", "중급", "고급"];

const CourseThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  border-top: 10px solid black;
`;

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
  const courseColor = getCourseColor(course.code);
  const difficulty = DIFFICULTY[course.difficulty || 0];
  const thumbStyle = {
    borderColor: courseColor,
  };

  return (
    <Card>
      <CourseThumb style={thumbStyle}>
        <CourseIcon photoUrl={course.photoUrl} />
      </CourseThumb>

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
