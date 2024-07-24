"use client";
import { getTodos } from "@/app/apis/todo-no-rls";
import React, { useEffect } from "react";

const TodoContainer = () => {
  useEffect(() => {
    getTodos();
  }, []);
  return <div>TodoContainer</div>;
};

export default TodoContainer;
