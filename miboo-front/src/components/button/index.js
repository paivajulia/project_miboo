import React from "react";
import "./button.css"

function Button(params) {
    return (
      <div className="button-container" onClick={params.onClick}>
        <p className="button-name">{params.name}</p>
      </div>
    );
  }
  
  export default Button;