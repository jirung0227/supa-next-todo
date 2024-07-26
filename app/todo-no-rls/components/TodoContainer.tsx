"use client";
import TodoList from "@/app/components/ui/TodoList";
import useTodosController from "../hooks/useTodosController";

const TodoContainer = () => {
  const { loading, todos } = useTodosController();

  return (
    <div>
      <TodoList
        sharedUserFullName='test user'
        owerUserId='123123'
        loading={loading}
        // todoListData={todos}
        isReadOnly={true}
      />
    </div>
  );
};

export default TodoContainer;
