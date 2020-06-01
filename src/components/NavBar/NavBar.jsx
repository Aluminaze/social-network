import React from 'react';
import style from './NavBar.module.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={style.nav}>
          <ul>
            <li className={style.item}><NavLink className={style.link} to="/profile">Profile</NavLink></li>
            <li className={style.item}><NavLink className={style.link} to="/dialogs">Messages</NavLink></li>
            <li className={style.item}><NavLink className={style.link} to="/news">News</NavLink></li>
            <li className={style.item}><NavLink className={style.link} to="/music">Music</NavLink></li>
          </ul>
          <ul>
          <li className={style.item}><NavLink className={style.link} to="/settings">Settings</NavLink></li>
          </ul>
        </nav>
    )
}

export default NavBar;