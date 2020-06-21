import React from 'react'
import style from './User.module.css'

const User = (props) => {
  return (
    <div className={style.user__container}>
      <div className={style.user__data__leftSide}>
        <div className={style.user__photo}>Photo</div>
        <button className={style.user__followButton}>
          { `${(props.isFollow) ? 'Unfollow' : 'Follow'}` }
        </button>
      </div>
      <div className={style.user__data__rightSide}>
        <div className={style.user__info}>
          <div className={style.user__name}> {`${props.fullName}`} </div>
          <div className={style.user__location}> {`${props.country}`}, {`${props.city}`} </div>
        </div>
        <div className={style.user__status}> {`${props.status}`} </div>
      </div>
    </div>
  )
}

export default User