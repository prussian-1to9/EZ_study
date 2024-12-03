import React from "react";
import styled from "styled-components";

import Avatar from "@components/User/Avatar";

const WriterContainer = styled.div<{ userType: "author" | undefined }>`
  display: flex;
  align-items: center;

  ${({ userType }) => (userType === "author" ? "flex: none;" : "")}
`;
const WriterInfo = styled.div`
  margin-right: 10px;
`;
const WriterName = styled.div`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #494949;
`;
const WriterLevel = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #c4c4c4;
`;

const Writer = ({
  userType,
  writer,
}: {
  userType?: "author" | undefined;
  writer: Writer;
}) => {
  return (
    <WriterContainer userType={userType}>
      <WriterInfo>
        <WriterName>{writer.name}</WriterName>
        <WriterLevel>{writer.level}</WriterLevel>
      </WriterInfo>
      <Avatar photo={writer.profile.photo} name={writer.name} />
    </WriterContainer>
  );
};

export default Writer;
