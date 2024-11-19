import React from "react";
import Avatar from "@components/User/Avatar";

function Writer({ value }: { value: Writer }) {
  return (
    <div>
      <Avatar photo={value.profile.photo} name={value.name} />
      <p>{value.name}</p>
    </div>
  );
}

export default Writer;
