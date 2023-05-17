import React from "react";
import ReactDOM from "react-dom";

const fname = "Prakhar";
const lname = " Sinha";
const number = 7;

ReactDOM.render(
  <div> 
    <h1> Hello {fname+lname}</h1>
    <p>Your lucky number is {Math.random()}</p>  
  </div>,
  document.getElementById("root")
);
