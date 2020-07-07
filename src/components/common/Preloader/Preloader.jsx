import React from "react";
import style from "./Preloader.module.css";

const Preloader = (props) => {
  return props.isFetching ? (
    <div className={style.lds_ellipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : (
    false
  );
};

export default Preloader;
