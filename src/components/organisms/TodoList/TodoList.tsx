import { useTodos } from "@app/context/todos/TodosProvider";
import { TodoItem } from "@components/molecules/TodoItem/TodoItem";

export function TodoList() {
  const { state } = useTodos();

  return (
    <ul className="todos__list">
      {state.todos.map((item) => (
        <TodoItem key={item.id} id={item.id} text={item.text}></TodoItem>
      ))}
    </ul>
  );
}
