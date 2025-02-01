import React from "react";
import {
  Box,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import plusSvg from "./pic/plus-svgrepo-com.svg";
const flex = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "10vh",
  borderBottom: "2px solid white",
};

const selectCss = {
  width: "30%",
  backgroundColor: "white",
  borderRadius: "10px",
  height: "65%",
};
const button = {
  width: "20%",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "space-between",
  height: "65%",
};

export default function Nav(props) {
  const [selectedValue, setSelectedValue] = React.useState();

  const handleSelected = (event) => {
    setSelectedValue(event.target.value);
  };

  React.useEffect(() => {
    props.filter(selectedValue);
  }, [selectedValue]);
  return (
    <Box sx={flex}>
      <Button
        variant="contained"
        sx={button}
        onClick={() => {
          props.editFalse();
          props.handleOpen();
        }}
      >
        <span>Add Task </span>
        <img width="25" height="25" src={plusSvg} alt="unfound" />
      </Button>
      <FormControl sx={selectCss}>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          value={selectedValue}
          onChange={handleSelected}
        >
          <MenuItem value={"Completed"}>Completed</MenuItem>
          <MenuItem value={"All Task"}>All Task</MenuItem>
          <MenuItem value={"Created"}>Created</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
