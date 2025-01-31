import React from "react";
import { TextField, Box, Button } from "@mui/material";

const button = {
  borderRadius: "5px",
  margin: "0 10px",
  boxShadow: "5px 5px 10px #1976d2",
};

const CssTextField = {
  backgroundColor: "rgba(255,255,255,0.9) ",
  width: "70%",
  borderRadius: "10px",
  fontColor: "red",
  boxShadow: "5px -5px 10px white",
};
export default function Modal() {
  return (
    <React.Fragment>
      <Box>
        <TextField id="input" label="Title" variant="outlined" />
        <Button variant="contained">Contained</Button>
      </Box>
    </React.Fragment>
  );
}
