import React from "react";

export const CompleteArea = (props) => {
  const { completeTodos, onClickReturn } = props;
  return (
    <>
      <div className="complete-area">
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
