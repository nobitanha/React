import React, { useEffect, useState } from "react";
//1-import ColorfulMessage from "./components/ColorfulMessage";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  const onClickButton = () => {
    setNum1(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  const [num, setNum1] = useState(0); // default value = 0
  const [faceShowFlag, setFaceShowFlag] = useState(true); // default value = true

  // only the parameters on the list is changed, useEffect block is executed
  useEffect(() => {
    console.log("useEffect");
    if (num > 0) {
      if (num % 3 === 0) {
        // setFaceShowFlag(true); // error because rerendering too many times because of change state of the 'faceShowFlag' variable
        faceShowFlag || setFaceShowFlag(true);
      } else {
        //setFaceShowFlag(false);
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは！ </h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink" message="お元気です。" />

      <button onClick={onClickButton}>Count up</button>
      <br />
      <br />
      <button onClick={onClickSwitchShowFlag}> on/off </button>
      <p> {num} </p>
      {faceShowFlag && <p>＾＾ </p>}
    </React.Fragment>
  );
};

export default App;
