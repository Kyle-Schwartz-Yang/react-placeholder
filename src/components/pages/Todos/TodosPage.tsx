import { TodoPannel } from "@components/molecules/TodoPannel/TodoPannel";
import { TodoList } from "@components/organisms/TodoList/TodoList";

export function TodosPage() {
  return (
    <>
      <div className="todos">
        <TodoPannel />
        <TodoList />
      </div>
    </>
  );
}
