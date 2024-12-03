import React from "react";
import { memo } from "react";

const DateText = ({ value }: { value: string }) => {
  if (!value) return null;
  return <>{new Date(value).toLocaleDateString("ko-KR")}</>;
};

export default memo(DateText);
