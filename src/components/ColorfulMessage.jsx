import React from "react";

// 1-const ColorfulMessage = (props) => {
export const ColorfulMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "18px"
  };
  if (props.children != null)
    return <p style={contentStyle}>{props.children}</p>;
  else return <p style={contentStyle}>{props.message}</p>;
};

// 1-export default ColorfulMessage;
