import React from "react";
import "./homeForm.css";
import EntryForm from "./entryForm/EntryForm";
import Categories from "../../catergories/Catergories";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(
  require.context(
    "../../catergories/quizAssets",
    false,
    /\.(png|jpe?g|svg|webp)$/
  )
);

export default function HomeForm({ fetchQuestion }) {
  return (
    <div className="homeFormContainer">
      <div className="homeFormWrapper">
        <div className="formField">
          <EntryForm fetchQuestion={fetchQuestion} />
        </div>
        <div className="catGallary">
          <div className="catGallaryWrapper">
            {Object.keys(images).map((key) => {
              return (
                <img src={images[key]} alt="incase you no work" key={key}></img>
              );
              // console.log(images[key]);
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
