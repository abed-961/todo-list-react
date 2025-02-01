import React from "react";
import { Box, Button } from "@mui/material";

import Header from "./Header";
import Nav from "./Nav";
import Modall from "./Modal";
import Tasks from "./Tasks";

export const Context = React.createContext();
export const SelectContext = React.createContext();

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
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({});
  const [isEdited, setIsEdited] = React.useState(0);
  const [select, setSelect] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function setnewValue(title, date) {
    let newTitle = JSON.stringify(title);
    let newDates = JSON.stringify(date);
    localStorage.setItem("titles", newTitle);
    localStorage.setItem("Dates", newDates);
  }

  function setFinish(newState) {
    const State = JSON.stringify(newState);
    localStorage.setItem("state", State);
  }

  const editMenu = (selected) => {
    setSelect(selected);
  };

  return (
    <Box sx={formCatinerStyle}>
      <Header />
      <Nav
        editFalse={() => setIsEdited(false)}
        handleOpen={() => handleOpen()}
        filter={(selected) => editMenu(selected)}
      />

      {open ? (
        <Context.Provider value={{ ...data, edit: isEdited }}>
          <Modall handleClose={handleClose} />
        </Context.Provider>
      ) : (
        <SelectContext.Provider value={select}>
          <Tasks
            EditData={(title, dates, index) => {
              setIsEdited(true);
              setData({
                title: title,
                date: dates,
                index: index,
              });
            }}
            setFinish={(bool) => {
              setFinish(bool);
            }}
            handleOpen={handleOpen}
            saveValue={(title, date) => {
              setnewValue(title, date);
            }}
          />
        </SelectContext.Provider>
      )}
    </Box>
  );
}
