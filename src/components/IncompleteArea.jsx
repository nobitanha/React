import React from "react";

export const IncompleteArea = (props) => {
  const { incompleteTodos, onClickComplete, onCLickDelete } = props;
  return (
    <>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <div>
          <ul>
            {incompleteTodos.map((todo, index) => {
              return (
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onCLickDelete(index)}>削除</button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
