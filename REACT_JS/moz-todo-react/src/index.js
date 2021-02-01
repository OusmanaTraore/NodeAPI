import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const DATA = [
  // { id: "todo-0", name: "", completed: false },
  // { id: "todo-1", name: "Sleep", completed: false },
  // { id: "todo-2", name: "Repeat", completed: false },
];
const FILTER = [
  { id: "filter-0", name: "All" },
  { id: "filter-1", name: "Active" },
  { id: "filter-2", name: "Completed" },
];
ReactDOM.render(
  <App tasks={DATA} filtres={FILTER} />,
  document.getElementById("root")
);
