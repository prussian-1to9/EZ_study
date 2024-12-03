import React from "react";
import styled from "styled-components";

import getCourseColor from "@utils/getCourseColor";
import CourseIcon from "./CourseIcon";

const StyledDiv = styled.div<{ borderColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  border-top: 10px solid ${({ borderColor }) => borderColor ?? "black"};
`;

const CourseThumb = ({ course }: { course: Course }) => {
  return (
    <StyledDiv borderColor={getCourseColor(course.code)}>
      <CourseIcon photoUrl={course.photoUrl} />
    </StyledDiv>
  );
};

export default CourseThumb;
