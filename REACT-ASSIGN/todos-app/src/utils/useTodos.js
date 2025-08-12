import { useReducer, useEffect } from "react";
import todosReducer from "./todosReducer";

export default function useTodos() {
  const [todos, dispatch] = useReducer(todosReducer, [], () => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return { todos, dispatch };
}
