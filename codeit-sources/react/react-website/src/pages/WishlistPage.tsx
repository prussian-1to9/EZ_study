import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import closeButton from "@assets/closeButton.svg";
import { deleteWishlist, getWishlist } from "../api";

import Button from "@components/Button";
import Container from "@components/Container";
import CourseItem from "@components/Course/CourseItem";
import { WarnEmpty } from "@components/Warn";

const WishListContainer = styled(Container)`
  margin: 50px auto;

  & > h1 {
    margin: 30px auto;
    text-align: center;
  }
`;

const DeleteButton = styled.img`
  display: none;
  position: absolute;
  top: 20px;
  right: calc(10px - 8px);
  cursor: pointer;
`;

const WishItems = styled.ul`
  width: 30%;
  min-width: 260px;
  padding: 0;
  margin: 0 auto;
  list-style: none;
`;

const WishItem = styled.li`
  position: relative;
  margin-bottom: 30px;

  &:hover ${DeleteButton} {
    display: block;
  }
`;

function WishlistPage() {
  const [courses, setCourses] = useState([]);

  const handleDelete = (courseSlug: string) => {
    deleteWishlist(courseSlug);
    const nextCourses = getWishlist();
    setCourses(nextCourses);
  };

  useEffect(() => {
    const nextCourses = getWishlist();
    setCourses(nextCourses);
  }, []);

  return (
    <WishListContainer>
      <h1>나의 위시리스트</h1>
      {courses.length === 0 ? (
        <>
          <WarnEmpty
            title="담아 놓은 코스가 없어요."
            description="카탈로그에서 나에게 필요한 코스를 찾아보세요."
          />
          <div style={{ textAlign: "center", margin: "12px auto" }}>
            <Link to="/courses">
              <Button as="div">코스 찾아보기</Button>
            </Link>
          </div>
        </>
      ) : (
        <WishItems>
          {courses.map((course: Course) => (
            <WishItem key={course.slug}>
              <CourseItem course={course} />
              <DeleteButton
                src={closeButton}
                alt="닫기"
                onClick={() => handleDelete(course.slug)}
              />
            </WishItem>
          ))}
        </WishItems>
      )}
    </WishListContainer>
  );
}

export default WishlistPage;
