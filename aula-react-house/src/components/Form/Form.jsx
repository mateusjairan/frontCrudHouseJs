import React from "react";
import "./form.css";

const Form = ({ children, width, height, bg, onSubmit, title }) => {
  return (
    <form
      style={{
        width: `${width}`,
        height: `${height}`,
        backgroundColor: `${bg}`,
      }}
      onSubmit={onSubmit}
      className="generic-form"
    >
      <h1>{title}</h1>
      {children}
    </form>
  );
};

export default Form;
