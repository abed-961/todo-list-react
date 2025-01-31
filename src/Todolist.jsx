import React from "react";
import { Box } from "@mui/material";

import Header from "./Header";
import Nav from "./Nav";

const formCatinerStyle = {
  width: "90vw",
  height: "80vh",
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
      <Nav />
    </Box>
  );
}
