import React from "react";

const style = {
  backgroundColor: "yellow",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  bordeRadius: "8px"
};

export const CompleteArea = (props) => {
  const { completeTodos, onClickReturn } = props;
  return (
    <>
      <div style={style}>
        <p className="title">完了のTODO</p>
        <div>
          <ul>
            {completeTodos.map((todo, index) => {
              return (
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button onClick={() => onClickReturn(index)}>戻す</button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
