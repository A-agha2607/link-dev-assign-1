import React, { useContext } from "react";
import { todosContext } from "../utils/todosContext";
todosContext

export default function TodoItem({ todo }) {
  const { dispatch } = useContext(todosContext);

  return (
    <li style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px",
      borderBottom: "1px solid #ccc"
    }}>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
        onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
      >
        {todo.text}
      </span>
      <button
        onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}
        style={{ background: "red", color: "white", border: "none", padding: "5px" }}
      >
        X
      </button>
    </li>
  );
}
