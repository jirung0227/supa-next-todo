import { TodoDto } from "@/app/todo-no-rls/hooks/useTodosController.js";

const TodoItem = ({ todo }: { todo: TodoDto }) => {
  return <div>{todo?.content}</div>;
};

export default TodoItem;
