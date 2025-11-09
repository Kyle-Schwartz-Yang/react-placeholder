import { createContext, useContext, useReducer, useEffect } from "react";
import { useLocalStorage } from "@shared/hooks/useLocalStorage/useLocalStorage";

type TodosItemType = {
  id: number;
  text: string;
};

type State = {
  todos: TodosItemType[];
};

type Action =
  | { type: "CREATE"; payload: TodosItemType }
  | { type: "DELETE"; payload: number };

type TodosContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
  createTodo: (text: string) => void;
};

const TodosContext = createContext<TodosContextType | null>(null);

// const initialSate = {
//   todos: [],
// };

function todoReducer(state: State, action: Action) {
  switch (action.type) {
    case "CREATE":
      return { ...state, todos: [action.payload, ...state.todos] };
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
}

export function TodosProvider({ children }: { children: React.ReactNode }) {
  const [todosLS, setTodosLS] = useLocalStorage<TodosItemType[]>("todos", []);
  const [state, dispatch] = useReducer(todoReducer, { todos: todosLS });

  // useEffect(() => {
  //   localStorage.clear();
  // }, []);

  useEffect(() => {
    setTodosLS(state.todos);
  }, [state.todos, setTodosLS]);

  const createTodo = (text: string) => {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
    };
    dispatch({ type: "CREATE", payload: newTodo });
  };

  return (
    <TodosContext.Provider value={{ state, dispatch, createTodo }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error("Ops have problem in TodosContext");
  }

  return context;
}
