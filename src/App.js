import React, { useState } from "react";
import "./styles.css";
import { ColorfulMessage } from "./components/ColorfulMessage";
import { InputTodo } from "./components/InputTodo";
import { IncompleteArea } from "./components/IncompleteArea";
import { CompleteArea } from "./components/CompleteArea";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいいい"
  ]);

  const [completeTodos, setCompleteTodos] = useState(["ううううう"]);

  const onChangeTodoText = event => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onCLickDelete = index => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = index => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickReturn = index => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodo５個までだよ〜。消化しろ〜</p>
      )}

      <IncompleteArea
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onCLickDelete={onCLickDelete}
      />
      <CompleteArea
        completeTodos={completeTodos}
        onClickReturn={onClickReturn}
      />
    </>
  );
};
