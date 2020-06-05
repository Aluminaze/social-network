import React from 'react'
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.logo} src="https://cdn.dribbble.com/users/2087607/screenshots/6451099/free-youtube-comments-icon-png-download.jpg" />
        </header>
    )
}

export default Header