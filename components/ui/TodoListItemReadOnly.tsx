"use client";
import { TodoDto } from "@/app/todo-no-rls/hooks/useTodosController.js";

const TodoListItemReadOnly = ({ todo }: { todo: TodoDto }) => {
  return (
    <li className="min-h-[60px] bg-[#B290D9] border border-black rounded-2xl font-bold group">
      <article className="min-h-[60px] p-4 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 text-[18px] cursor-pointer">{todo?.content}</div>
      </article>
    </li>
  );
};

export default TodoListItemReadOnly;
