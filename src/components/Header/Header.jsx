import React from "react";
import style from "./Header.module.css";
import { ReactComponent as Logo } from "./header_icon.svg";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const logoutRequest = () => {
    props.logout();
  }

  return (
    <header className={style.header}>
      <Logo className={style.logo} />
      {props.isAuthorized ? (
        <div className={style.header__rightSide}>
          <div className={style.login}>{props.login}</div>
          <button onClick={logoutRequest} className={style.logout}>Logout</button>
        </div>
      ) : (
        <NavLink to={"/login"}>
          <div className={style.login}>Login</div>
        </NavLink>
      )}
    </header>
  );
};

export default Header;
