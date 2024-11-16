import React from "react";
import "./input.css";
const Input = ({ id, children, width, height, onChange, value, name }) => {
  return (
    <div className="generic-input-area" style={{ width: `${width}` }}>
      <label htmlFor={id}>{children}</label>
      <input
        type="text"
        id={id}
        name={name}
        style={{ height: `${height}` }}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
