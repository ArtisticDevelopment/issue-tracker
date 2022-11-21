import "./App.css";
import React, { useState, useEffect } from "react";
import AddIssue from "./components/AddIssue/AddIssue.js";
import CurrentIssue from "./components/CurrentIssue/CurrentIssue.js";

function App() {
  const [addIssue, setAddIssue] = useState(true);

  const switchIssue = () => {
    setAddIssue(!addIssue);
  };

  return (
    <div className="App">
      <h1>Issue Tracker</h1>
      <hr />
      <div className="grey-card-container">
        {addIssue ? <AddIssue /> : <CurrentIssue />}
      </div>
      <div className="buttons">
        <button className="view-button active-button" onClick={switchIssue}>
          Add Issue
        </button>
        <button className="view-button" onClick={switchIssue}>
          Current Issues
        </button>
      </div>
    </div>
  );
}

export default App;
