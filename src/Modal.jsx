import React from "react";
import { TextField, Box, Button, Modal } from "@mui/material";

const button = {
  borderRadius: "5px",
  margin: "0 10px",
};

const CssTextField = {
  borderRadius: "10px",
  width: "50vw",
};

const ModalCss = {
  backgroundColor: "#eef",
  height: "50vh",
  width: "80%",
  border: "2px solid black",
  margin: "15px auto",
  borderRadius: "5px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50% , -50% )",
};

const backgroundBlack = {
  width: "100%",
  height: "100vh",
  backgroundColor: "rgba(0 , 0 , 0 , 0.6)",
  position: "absolute",
  top: "0",
  left: "50%",
  transform: "translateX(-50% )",
};

const inputContainer = {
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  height: "30vh",
};

const buttonContainer = {
  height: "20vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "50vw",
  margin: "0 auto",
};

export default function Modall(props) {
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState();
  function checkTask() {
    let titleValues = JSON.parse(localStorage.getItem("titles")); // Name of Titles Array in local Storage
    for (let value in titleValues) {
      if (title == value) {
        alert("Attention ! This Title is already exist");
        return 0; // if title was exist this will ignore the rest of the code
      }
    }

    saveValues(titleValues);
  }
  function saveValues(titles) {
    let titleValues = titles;
    let dateValues = JSON.parse(localStorage.getItem("Dates")); // Name of Dates Array in local Storage
    if (dateValues == null) {
      dateValues = [];
      titleValues = [];
    }
    dateValues.push(date);
    titleValues.push(title);

    //adding the current value to array
    dateValues = JSON.stringify(dateValues);
    titleValues = JSON.stringify(titleValues);
    // convert the array to String
    localStorage.setItem("titles", titleValues);
    localStorage.setItem("Dates", dateValues);
    // save titles and Dates array in localStorage
  }

  return (
    <Box
      sx={backgroundBlack}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={ModalCss}>
        <Box>
          <div style={inputContainer}>
            <TextField
              label="Title"
              variant="outlined"
              sx={CssTextField}
              onChange={(event) => setTitle(event.target.value)}
            />
            <TextField
              label="Date"
              variant="outlined"
              sx={CssTextField}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
          <div style={buttonContainer}>
            <Button variant="contained" sx={button} onClick={checkTask}>
              Add
            </Button>
            <Button
              onClick={props.handleClose}
              variant="contained"
              sx={{ ...button, backgroundColor: "#f55" }}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
