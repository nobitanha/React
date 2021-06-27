import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    setNum1(num + 1);
  };
  const [num, setNum1] = useState(0);
  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは！ </h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink" message="お元気です。" />

      <button onClick={onClickButton}>Count up</button>
      <p> {num} </p>
    </React.Fragment>
  );
};

export default App;
