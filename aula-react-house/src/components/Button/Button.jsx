import React from "react";
import "./button.css";
const Button = ({ width, height, children, ...props }) => {
  return (
    <button
      className="generic-button"
      style={{
        width: `${width}`,
        height: `${height}`,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
