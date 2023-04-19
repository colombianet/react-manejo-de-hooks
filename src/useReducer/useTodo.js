import { useEffect, useReducer } from "react";
import { todoReducer } from "./todo-reducer";

export const useTodo = () => {
  const initialState = [];
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todosCount = todos.length;
  const todosPending = todos.filter( t => t.done == false).length;

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] add todo",
      payload: todo,
    };
    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] delete todo",
      payload: id,
    };
    dispatchTodo(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] toggle todo",
      payload: id,
    };
    dispatchTodo(action);
  };

  return {
    todos,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    todosCount,
    todosPending
  };
};
