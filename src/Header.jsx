import React from "react";
import { Box } from "@mui/material";

const STYLE = {
  width: "100%",
  height: "10%",
  borderBottom: "2px solid white",
};

const Title = {
  fontFamily: "sans-serif",
  textAlign: "center",
  textDecoration: "underline",
  color: "white",
  textShadow: "5px 5px 10px white",
};

export default function Header() {
  return (
    <Box sx={STYLE}>
      <h2 style={Title}>TO DO LIST</h2>
    </Box>
  );
}
