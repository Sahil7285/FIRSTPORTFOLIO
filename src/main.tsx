import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App.tsx";
import blogReducer from "../src/Redux/blogSlice"; // Correct import without .ts
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Configure Redux store
const store = configureStore({
  reducer: {
    blog: blogReducer, // Match the key to 'blog'
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);