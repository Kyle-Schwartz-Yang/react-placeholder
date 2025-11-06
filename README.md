# Counter Context with useReducer

#### feature/counter-context

- Звичайний counter, реалізація через Context API ( useReducer )
- Має action.ts, reducer.ts
- Функціонал: Increment, Decrement, Random

> В цілому гарний варіант але треба буде прописувати типізацію руками

- БУЛО 🔔

```tsx
import { ACTIONS } from "./action";

export type ActionType =
  | { type: typeof ACTIONS.INC }
  | { type: typeof ACTIONS.DEC }
  | { type: typeof ACTIONS.RND; payload: number };
```

> Перевага у тому що автоматично підхватуються типізація, яка вже по суті прописана

- СТАЛО 🔔

```tsx
import { onDecrement, onIncrement, onRandom } from "./action";

export type ActionType =
  | ReturnType<typeof onIncrement>
  | ReturnType<typeof onRandom>
  | ReturnType<typeof onDecrement>;
```
