import React from "react";
import "./homeForm.css";
import Categories from "../../catergories/Catergories";
import { TextField, MenuItem, styled } from "@mui/material";

const CssTextField = styled(TextField)({
  // "& label.Mui-focused": {
  //   color: "white",
  // },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "#2596be",
      border: "solid 2.6px #2596be",
      transition: "all 0.3s ease-in-out",
    },
    "& input": {
      color: "white",
    },
    // "&.Mui-focused fieldset": { borderColor: "red" },
  },
});

const CssSelect = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& icon": {
    fill: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  // "& .MuiOutlinedInput-root": {
  //   "& fieldset": {
  //     borderColor: "white",
  //   },
  // },
});
export default function HomeForm() {
  return (
    <div className="homeFormContainer">
      <div className="homeFormWrapper">
        <div className="homeFormHead">
          <label className="forName">Enter Your Full Name :</label>
          {/* <TextField
            style={{
              "&:focus": {
                borderRadius: 4,
                borderColor: "red",
              },
            }}
            id="name"
            variant="outlined"
            inputProps={{
              style: {
                height: 8,
                padding: "5px auto",

                fontSize: 13,
              },
            }}
          /> */}
          <CssTextField
            id="custom-css-outlined-input"
            inputProps={{
              style: {
                height: 1,
                padding: "1px auto",

                fontSize: 13,
              },
            }}
          />
        </div>

        <div className="categories">
          <CssSelect
            sx={{
              "& > :not(style)": {
                width: 160,
                color: "white",
                fontSize: 13,
                boxSizing: "border-box",
              },
            }}
            select
            variant="standard"
            label="Categories"
            displayEmpty={true}
            inputProps={{
              style: {
                height: 20,
                width: 100,
                padding: "5px auto",
                border: "none",
                fontSize: 13,
              },
            }}
            focused
          >
            {Categories.map((category) => (
              <MenuItem value={category.value} key={category.value}>
                {category.category}
              </MenuItem>
            ))}
            {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
          </CssSelect>
        </div>
      </div>
    </div>
  );
}
