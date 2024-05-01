import { QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { defaultQueryClient } from "./libs/react-query"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={defaultQueryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
