import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AttendanceBook from "./pages/AttendanceBook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <AttendanceBook />
  </>
);
