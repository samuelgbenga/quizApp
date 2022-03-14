import React from "react";
import "./homeForm.css";
import EntryForm from "./entryForm/EntryForm";

export default function HomeForm({ fetchQuestion }) {
  return (
    <div className="homeFormContainer">
      <div className="homeFormWrapper">
        <div className="formField">
          <EntryForm fetchQuestion={fetchQuestion} />
        </div>
        <div className="catGallary"></div>
      </div>
    </div>
  );
}
