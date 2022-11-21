import "./App.css";
import React, { useState } from "react";
import AddIssue from "./components/AddIssue/AddIssue.js";
import CurrentIssue from "./components/CurrentIssue/CurrentIssue.js";

function App() {
  const [addIssue, setAddIssue] = useState(true);

  const issueTrue = (event) => {
    setAddIssue(true);
  };

  const issueFalse = (event) => {
    setAddIssue(false);
  };

  return (
    <div className="App">
      <h1>Issue Tracker</h1>
      <hr />
      <div className="grey-card-container">
        {addIssue ? <AddIssue /> : <CurrentIssue />}
      </div>
      <div className="buttons">
        <button className="view-button active-button" onClick={issueTrue}>
          Add Issue
        </button>
        <button className="view-button" onClick={issueFalse}>
          Current Issues
        </button>
      </div>
    </div>
  );
}

export default App;
