import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import ToDoListMain from "./Todolist";
import { Box } from "@mui/material";

const centerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Box sx={centerStyle}>
    <ToDoListMain />
  </Box>
);

reportWebVitals();
