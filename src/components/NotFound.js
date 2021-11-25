import React from "react";
import "../components/Notfound.css";

export default function NotFound({ setnotFound }) {
  return (
    <div className="notfound--c">
      <h1 className="notfound-title">
        Your weather wasn't found please search again.
      </h1>
      <button onClick={() => setnotFound(false)}>Return to home</button>
    </div>
  );
}
