import React, { useState } from "react";
import "./AddIssue.css";

function AddIssue() {
  const [description, setDescription] = useState(true);
  const [dev, setDev] = useState(true);
  const [priority, setPriority] = useState(true);

  return (
    <div className="add-issue">
      <form>
        <label>
          <p>
            <strong>Description:</strong>
          </p>
          <input
            type="text"
            placeholder="tell us what's going on (max 100 characters)"
            maxLength={100}
            onKeyUp={() => console.log(this)}
          />
        </label>
        <label>
          <p>
            <strong>Assign To:</strong>
          </p>
          <select className="forDev" id="forDev">
            <option value="null">Developer...</option>
            <option value="John">John</option>
            <option value="Sarah">Sarah</option>
            <option value="Lewis">Lewis</option>
          </select>
        </label>
        <label>
          <p>
            <strong>Priority Level:</strong>
          </p>

          <select className="priority" id="priority">
            <option value="low">How Serious?...</option>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
            <option value="critical">critical</option>
          </select>
        </label>
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddIssue;
