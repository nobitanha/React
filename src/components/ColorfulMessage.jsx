import React from "react";

const ColorfulMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "18px"
  };
  if (props.children != null)
    return <p style={contentStyle}>{props.children}</p>;
  else return <p style={contentStyle}>{props.message}</p>;
};

export default ColorfulMessage;
