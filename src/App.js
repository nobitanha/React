import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは！ </h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink" message="お元気です。" />

      <button onClick={onClickButton}>Button</button>
    </React.Fragment>
  );
};

export default App;
