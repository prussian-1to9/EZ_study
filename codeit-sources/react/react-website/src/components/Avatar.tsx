import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

function Avatar({ photo, name }: { photo: string; name: string }) {
  return <StyledImg src={photo} alt={name} title={name} />;
}

export default Avatar;
