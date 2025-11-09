import { TodosProvider } from "./todos/TodosProvider";
import { ModalsProvider } from "./modals/ModalProvider";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ModalsProvider>
      <TodosProvider>{children}</TodosProvider>
    </ModalsProvider>
  );
}
