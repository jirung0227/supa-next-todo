"use client";
import { getTodos } from "@/app/apis/todo-no-rls";
import React, { useEffect } from "react";
import useTodosController from "../hooks/useTodosController";

const TodoContainer = () => {
  const { loading, todos } = useTodosController();
  console.log("loading>>>", loading);
  console.log("todos>>>", todos);

  return <div>TodoContainer</div>;
};

export default TodoContainer;
