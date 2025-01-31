import React from "react";
import { Box } from "@mui/material";

import Header from "./Header";

const formCatinerStyle = {
  width: "90vw",
  height: "80vh",
  display: "grid",
  border: "2px solid black ",
  backgroundColor: "#575757",
  borderRadius: "8px",
  boxShadow: "5px 5px 8px white  , -5px -5px 8px white",
  overflow: "scroll",
};
export default function ToDoListMain() {
  return (
    <Box sx={formCatinerStyle}>
      <Header />
    </Box>
  );
}
