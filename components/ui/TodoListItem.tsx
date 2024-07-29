"use client";
import { TodoDto } from "@/app/todo-no-rls/hooks/useTodosController.js";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiCircleCheck, CiEdit } from "react-icons/ci";

const TodoItem = ({
  todo,
  onDelete,
  onUpdate,
}: {
  todo: TodoDto;
  onDelete: (id: number) => void;
  onUpdate: (id: number, content: string) => void;
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [userInput, setUserInput] = useState(todo?.content ?? "");

  const onStartEdit = () => {
    setIsEdit(true);
  };
  // 수정이 끝났을때
  const onFinishEdit = () => {
    setIsEdit(false);
    onUpdate(todo.id, userInput);
  };
  // 삭제버튼 클릭했을때
  const onClickDelete = () => {
    onDelete(todo.id);
  };
  return (
    <li className='min-h-[60px] bg-[#B290D9] border border-black rounded-2xl font-bold group'>
      <article className='min-h-[60px] p-4 flex flex-col sm:flex-row gap-4'>
        {isEdit ? (
          <input
            className='flex-1 text-[18px]'
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          ></input>
        ) : (
          <div
            onClick={onStartEdit}
            className='flex-1 text-[18px] cursor-pointer'
          >
            {todo?.content}
          </div>
        )}

        <div className='w-fit hidden group-hover:flex gap-[8px]  self-end'>
          {isEdit ? (
            <div
              className='h-[45px] w-[45px] flex justify-center 
            items-center bg-[#7EBB95] border-black rounded-2xl'
              onClick={onFinishEdit}
            >
              <CiCircleCheck size={30} />
            </div>
          ) : (
            <div
              className='h-[45px] w-[45px] flex justify-center 
            items-center bg-[#7EBB95] border-black rounded-2xl'
              onClick={onStartEdit}
            >
              <CiEdit size={30} />
            </div>
          )}

          <div
            className='h-[45px] w-[45px] flex justify-center 
            items-center bg-[#ED7461] border-black rounded-2xl'
            onClick={onClickDelete}
          >
            <AiOutlineDelete size={30} />
          </div>
        </div>
      </article>
    </li>
  );
};

export default TodoItem;
