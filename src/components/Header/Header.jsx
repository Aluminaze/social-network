import React from "react";
import style from "./Header.module.css";
import { ReactComponent as Logo } from "./header_icon.svg";

const Header = () => {
  return (
    <header className={style.header}>
      <Logo className={style.logo} />
    </header>
  );
};

export default Header;
