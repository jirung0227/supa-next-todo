"use client";
import { getTodos } from "@/app/apis/todo-no-rls";
import React, { useEffect } from "react";
import useTodosController from "../hooks/useTodosController";
import TodoList from "@/app/components/ui/TodoList";

const TodoContainer = () => {
  const { loading, todos } = useTodosController();

  return (
    <div>
      <TodoList />
    </div>
  );
};

export default TodoContainer;
