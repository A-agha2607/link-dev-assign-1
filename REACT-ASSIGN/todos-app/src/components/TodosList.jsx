import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { todosContext } from "../utils/todosContext";


export default function TodoList() {
  const { todos } = useContext(todosContext);

  if (todos.length === 0) return <p>No tasks yet!</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
