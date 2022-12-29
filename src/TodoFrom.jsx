import React, { useState } from "react";
import { useTodo } from "./TodoContext";

const TodoForm = () => {
  const { addTodo, todo, setTodo, setEditMode, editMode, updateTodo } =
    useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editMode) {
      addTodo(todo.todoContent);
    } else {
      updateTodo(todo.id, todo.todoContent);
      setEditMode(false);
    }

    setTodo({
      id: 0,
      todoContent: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo.todoContent}
        onChange={(e) =>
          setTodo((prev) => ({ ...prev, todoContent: e.target.value }))
        }
        placeholder="Type in Something ..."
      />
    </form>
  );
};

export default TodoForm;