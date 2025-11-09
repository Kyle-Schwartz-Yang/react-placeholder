import { useState } from "react";
import { useTodos } from "@app/context/todos/TodosProvider";
import { useInput } from "@shared/hooks/useInput/useInput";
import { Modal } from "@shared/ui/Modal/Modal";

import style from "./TodoPannel.module.css";

export function TodoPannel() {
  const [isOpen, setIsOpen] = useState(false);
  const { value, onChange, onReset } = useInput("");
  const { createTodo } = useTodos();

  const handleAdd = () => {
    createTodo(value);
    onReset();
    setIsOpen(false);
  };

  return (
    <>
      <div className={style.pannel}>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={style.button}
        >
          CREATE TODO
        </button>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <input
          type="text"
          placeholder="Create todo"
          value={value}
          onChange={onChange}
        />
        <button type="button" onClick={handleAdd}>
          ADD
        </button>
      </Modal>
    </>
  );
}
