import { createContext, useContext, useReducer } from "react";

type CounterContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type State = {
  counter: number;
};

type Action =
  | { type: "INC" }
  | { type: "DEC" }
  | { type: "RND"; payload: number }
  | { type: "RESET" };

const CounterContext = createContext<CounterContextType | null>(null);

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + 1 };
    case "DEC":
      return { ...state, counter: state.counter - 1 };
    case "RND":
      return { ...state, counter: action.payload };
    case "RESET":
      return { ...state, counter: 0 };
    default:
      return state;
  }
}

const initialState: State = {
  counter: 0,
};

export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const ctx = useContext(CounterContext);
  if (!ctx) throw new Error("Problem in the TodoContext");

  return ctx;
}
