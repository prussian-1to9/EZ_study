import React from "react";
import styled from "styled-components";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { addWishlist, getCourseBySlug } from "../api";

import getCourseColor from "@utils/getCourseColor";

import Button from "@components/Button";
import Container from "@components/Container";
import Card from "@components/Card";
import CourseIcon from "@components/Course/CourseIcon";
import CourseHeader from "@components/Course/CourseHeader";

const TopicContainer = styled(Container)`
  margin: 30px auto 100px;

  ${Card} {
    padding: 28px 50px;
  }
  ${Card}:not(:last-child) {
    margin-bottom: 20px;
  }
  ${Card} h3 {
    margin: 0 auto 10px;
    font-size: 18px;
    font-weight: 500;
    color: #545454;
  }
  ${Card} p {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    color: #878787;
  }
`;

function CoursePage() {
  const { courseSlug } = useParams();
  const navigate = useNavigate();

  const course = getCourseBySlug(courseSlug);
  if (!course) return <Navigate to="/courses" />;

  const courseColor = getCourseColor(course?.code);

  const headerStyle = {
    borderTopColor: courseColor,
  };

  const handleAddWishlistClick = () => {
    addWishlist(course?.slug);
    navigate("/wishlist");
  };

  return (
    <>
      <Helmet>
        <title>Codethat - {course.title}</title>
      </Helmet>
      <CourseHeader style={headerStyle}>
        <Container>
          <CourseIcon photoUrl={course.photoUrl} />
          <h1>{course.title}</h1>
          <Button variant="round" onClick={handleAddWishlistClick}>
            + 코스 담기
          </Button>
          <p>{course.summary}</p>
        </Container>
      </CourseHeader>
      <TopicContainer>
        {course.topics.map(({ topic }: Topic) => (
          <Card key={topic.slug}>
            <h3>{topic.title}</h3>
            <p>{topic.summary}</p>
          </Card>
        ))}
      </TopicContainer>
    </>
  );
}

export default CoursePage;
