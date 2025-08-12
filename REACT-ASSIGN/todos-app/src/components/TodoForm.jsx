import React, { useState, useContext } from "react";
import { todosContext } from "../utils/todosContext";


export default function TodoForm() {
  const [text, setText] = useState("");
  const { dispatch } = useContext(todosContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter a task..."
        style={{ padding: "8px", width: "70%" }}
      />
      <button type="submit" style={{ padding: "8px" }}>Add</button>
    </form>
  );
}
