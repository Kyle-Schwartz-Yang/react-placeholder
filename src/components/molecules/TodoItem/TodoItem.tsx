import { useModalManager } from "@app/context/modals/ModalProvider";
import { useTodos } from "@app/context/todos/TodosProvider";
import { ConfirmDeleteTodo } from "@components/atoms/ConfirmDeleteTodo/ConfirmDeleteTodo";

import styled from "./TodoItem.module.css";

type TodosItemType = {
  id: number;
  text: string;
};

export function TodoItem({ id, text }: TodosItemType) {
  const { dispatch } = useTodos();
  const { openModal, closeModal } = useModalManager();

  const handleDelete = (todoId: number) => {
    dispatch({ type: "DELETE", payload: todoId });
    closeModal();
  };

  return (
    <>
      <li className={styled.item}>
        <p>{text}</p>
        <button
          type="button"
          className="button"
          onClick={() =>
            openModal(<ConfirmDeleteTodo onConfirm={() => handleDelete(id)} />)
          }
        >
          Delete
        </button>
      </li>
    </>
  );
}
