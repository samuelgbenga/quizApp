import React, { useState, useEffect } from "react";
import "./entryForm.css";
import { MenuItem, TextField, styled, Box, Button } from "@mui/material";
import Catergories from "../../../catergories/Catergories";
import { useNavigate } from "react-router-dom";

// this is for the text field and selection
const CssTextField = styled(TextField)({
  "& label": { color: "#C8C8C8", fontSize: 13 },
  "& label.Mui-focused": {
    color: "#C8C8C8",
    fontSize: 13,
  },
  "& input": {
    color: "white",
    padding: 5,
    fontSize: 13,
  },
  "& .MuiSelect-select": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "aqua",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "white",
  },
  "&:hover": {
    "& .MuiInput-underline:before": {
      borderBottomColor: "white",
    },
  },
});
// this is for the button using material UI
const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 15,
  backgroundColor: "rgb(0, 200, 200)",

  borderColor: "#0063cc",
  "&:hover": {
    backgroundColor: "aqua",
    borderColor: "aqua",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "rgb(0, 200, 200)",
    borderColor: "aqua",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.05rem rgba(0,123,255,.2)",
  },
});
// function to extract image from a folder

// testing the image file for any error

export default function EntryForm({ fetchQuestion }) {
  const [category, setCategory] = useState("");

  const [difficulty, setDifficulty] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      fetchQuestion(category, difficulty, name);

      setError(false);
      navigate("/quiz");
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (error) setError(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [error]);

  return (
    <div className="entryFormContainer">
      <div className="entryFormWrapper">
        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr" },
            gap: 3,
            width: "85%",
          }}
        >
          {error ? <div className="errorMessage">Incomplet Form</div> : ""}
          <CssTextField
            label="Enter Your Full Name"
            placeholder="ex: Samuel Gbenga Joseph"
            variant="standard"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <CssTextField
            select
            defaultValue={""}
            label="Select Category"
            variant="standard"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            {Catergories.map((cat) => (
              <MenuItem value={cat.value} key={cat.category}>
                {cat.category}
              </MenuItem>
            ))}
          </CssTextField>
          <CssTextField
            select
            defaultValue={""}
            label="Select Difficulty Level"
            variant="standard"
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <MenuItem value="easy">Easy</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
          </CssTextField>
          <BootstrapButton
            variant="contained"
            style={{ width: "100%" }}
            onClick={handleSubmit}
          >
            Start Quiz
          </BootstrapButton>
        </Box>
      </div>
    </div>
  );
}
