"use client";
import TodoList from "@/app/components/ui/TodoList";
import useTodosController from "../hooks/useTodosController";

const TodoContainer = () => {
  const {
    loading,
    todos,
    onCreateEmptyTodos,
    onUpdateTodos,
    onDeleteTodos,
    onSearchTodos,
  } = useTodosController();

  return (
    <div>
      <TodoList
        sharedUserFullName='test user'
        owerUserId='123123'
        loading={loading}
        todoListData={todos}
        isReadOnly={false}
        onUpdate={onUpdateTodos}
        onCreate={onCreateEmptyTodos}
        onDelete={onDeleteTodos}
        onSearch={onSearchTodos}
      />
    </div>
  );
};

export default TodoContainer;
