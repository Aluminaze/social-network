import React from 'react';
import style from './Profile.module.css'
import Posts from './Posts/Posts';

const Profile = (props) => { 
  return (
    <div className={style.profile}>
      <div className={style.wallpaper__block}>
        <img className={style.wallpaper__img} src="https://images5.alphacoders.com/102/1026346.jpg" alt="font-wallpaper" />
      </div>

      <div className={style.profile__info}>
        <div className={style.profile__photo}>
          <img className={style.profile__img} src="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0149-CUSA09988_00-AV00000000000001/1553560094000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000" alt="profile-photo" />
        </div>

        <div className={style.profile__data}>
          <div className={style.profile__name}>Rick Sanchez</div>
          <div className={style.profile__dateOfBirth}>Date of birth: <span>1 Jan. 2000 year.</span></div>
          <div className={style.profile__city}>City: <span>Minsk</span></div>
          <div className={style.profile__education}>Education: <span>BSU'11</span></div>
          <div className={style.profile__webSite}>Web site: <a href="#">www.it-kamasutra.com</a></div>
        </div>
      </div>

      <Posts postsData={props.postsData}/>
    </div>
  )
}

export default Profile;