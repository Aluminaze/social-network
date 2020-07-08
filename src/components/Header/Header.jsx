import React from "react";
import style from "./Header.module.css";
import { ReactComponent as Logo } from "./header_icon.svg";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <Logo className={style.logo} />
      {props.isAuthorized ? (
        <div className={style.login}>{props.login}</div>
      ) : (
        <NavLink to={"/login"}>
          <div className={style.login}>Login</div>
        </NavLink>
      )}
    </header>
  );
};

export default Header;
