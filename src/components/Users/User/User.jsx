import React from 'react'
import style from './User.module.css'

const User = (props) => {
  return (
    <div className={style.user__container}>
      <div className={style.user__data__leftSide}>
        {props.photo != null 
        ? <img className={style.user__photo} src={props.photo} alt="profile_photo"/>  
        : <div className={style.user__photo}>Photo</div>}
        {(props.followed)
          ? <button className={style.user__followButton} onClick={() => {
            props.unfollow(props.id)
          }}>Unfollow</button>
          : <button className={style.user__followButton} onClick={() => {
            props.follow(props.id)
          }}>Follow</button>
        }
      </div>
      <div className={style.user__data__rightSide}>
        <div className={style.user__info}>
          <div className={style.user__name}> {`${props.name}`} </div>
          <div className={style.user__location}> {`${props.country}`}, {`${props.city}`} </div>
        </div>
        <div className={style.user__status}> {`${props.status}`} </div>
      </div>
    </div>
  )
}

export default User
