import React from 'react';
import style from './../style/css/NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={style.nav}>
          <ul>
            <li className={style.item}><a className={style.link} href="#">Profile</a></li>
            <li className={style.item}><a className={style.link} href="#">Messages</a></li>
            <li className={style.item}><a className={style.link} href="#">News</a></li>
            <li className={style.item}><a className={style.link} href="#">Music</a></li>
          </ul>
          <ul>
          <li className={style.item}><a className={style.link} href="#">Settings</a></li>
          </ul>
        </nav>
    )
}

export default NavBar;