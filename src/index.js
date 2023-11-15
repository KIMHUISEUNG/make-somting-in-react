import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AttendanceBook from "./pages/AttendanceBook";
import TodoList from "./pages/TodoList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <AttendanceBook />
    <TodoList />
  </>
);
