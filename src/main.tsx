import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CounterProvider } from "@app/store/CounterContext";

import App from "@app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>
);
