import React from "react";

const Content = (props) => {
  return (
    <ul>
      {props.contents.map((item) => (
        <p key={item.part}>
          {item.part} {item.exercises}
        </p>
      ))}
    </ul>
  );
};

export default Content;
