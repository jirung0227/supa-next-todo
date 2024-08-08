"use client";
import TodoList from "@/components/ui/TodoList";
import useTodosController from "../hooks/useTodosController";

interface TodoContainerProps {
  owerUserId: string;
}

const TodoContainer = ({ owerUserId }: TodoContainerProps) => {
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
        sharedUserFullName="test user"
        owerUserId={owerUserId}
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
