import React from "react";
import style from "./FormsControls.module.css";

export const InputForm = (props) => {
  const { input, meta, type } = props;
  const hasError = meta.error && meta.touched;

  // debugger;

  return (
    <div className={style.inputForm + " " + (hasError ? style.error : "")}>
      <input {...input} type={type} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
