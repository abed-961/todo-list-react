import React, { useContext, useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { SelectContext } from "./Todolist";

const buttonContainer = {
  display: "flex",
  float: "right",
  width: "50%",
  height: "5vh",
  borderRadius: "5px",
  paddingBottom: "10px",
  justifyContent: "space-around",
};

const taskStyle = {
  width: "80vw",
  margin: "10px auto",
};

const textTitle = {
  paddingLeft: "1rem",
};

const pics = {
  width: "30px",
  height: "30px",
  color: "white",
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  borderRadius: "5px",
};

const white = {
  color: "white",
};
export default function Tasks(props) {
  const titleTask = JSON.parse(localStorage.getItem("titles"));
  const dateTask = JSON.parse(localStorage.getItem("Dates"));
  const state = JSON.parse(localStorage.getItem("state"));
  const [cards, setCards] = useState(titleTask);
  const [Dates, setDates] = useState(dateTask);
  const [bool, setBool] = useState(state);
  //filter part ;

  let bools = [];

  const [filterBools, setFilterBools] = useState([]);

  //Context Hooks
  const selectConext = useContext(SelectContext);

  function deleteTask(index) {
    let removedTitle = [...cards];
    removedTitle.splice(index, 1);
    setCards(removedTitle);

    let removedDates = [...Dates];
    removedDates.splice(index, 1);
    setDates(removedDates);

    let removedState = [...bool];
    removedState.splice(index, 1);
    setBool(removedState);
  }

  function editCheck(index) {
    let state = [...bool];
    if (state[index] == true) state.splice(index, 1, false);
    else state.splice(index, 1, true);
    setBool(state);
  }

  const filterMenu = () => {
    bools = [];
    cards.map((element, index) => {
      if (selectConext === "Completed") {
        if (bool[index] == true) bools.push("block");
        else bools.push("none");
      } else if (selectConext === "Created") {
        if (bool[index] == false) bools.push("block");
        else bools.push("none");
      } else {
        bools.push("block");
      }
    });
    setFilterBools(bools);
  };

  // use Effect Hooks

  useEffect(() => {
    props.saveValue(cards, Dates);
    filterMenu();
  }, [cards, Dates]);

  useEffect(() => {
    props.setFinish(bool);
    filterMenu();
  }, [bool]);

  //for filtering the tasks ----
  useEffect(() => {
    filterMenu();
  }, [props]);
  return (
    <Box sx={taskStyle}>
      {cards.map((card, index) => (
        <Card
          id={index}
          sx={{
            marginBottom: "1rem",
            height: "15vh",
            display: filterBools[index],
          }}
        >
          <CardContent sx={{ height: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ paddingBottom: "1rem" }}
                >
                  Tittle : <span style={textTitle}> {card} </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Dates : <span>{Dates[index]}</span>
                </Typography>
              </Box>
              <Box>
                <Checkbox
                  defaultChecked
                  color="success"
                  disabled
                  checked={bool[index]}
                />
              </Box>
            </Box>
            <Box sx={buttonContainer}>
              <Box sx={{ ...pics, backgroundColor: "blue" }}>
                <Button
                  onClick={() => {
                    props.EditData(card, Dates[index], index);
                    props.handleOpen();
                  }}
                >
                  <BorderColorIcon sx={white} />
                </Button>
              </Box>
              <Box sx={{ ...pics, backgroundColor: "red" }}>
                <Button onClick={() => deleteTask(index)}>
                  <DeleteIcon sx={white} />
                </Button>
              </Box>
              <Box sx={{ ...pics, backgroundColor: "green" }}>
                <Button
                  onClick={() => {
                    editCheck(index);
                  }}
                >
                  <DoneAllIcon sx={white} />
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
