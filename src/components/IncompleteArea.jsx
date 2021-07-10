import React from "react";

const style = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  bordeRadius: "8px"
};

export const IncompleteArea = (props) => {
  const { incompleteTodos, onClickComplete, onCLickDelete } = props;
  return (
    <>
      <div style={style}>
        <p className="title">未完了のTODO</p>
        <div>
          <ol>
            {incompleteTodos.map((todo, index) => {
              return (
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onCLickDelete(index)}>削除</button>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
