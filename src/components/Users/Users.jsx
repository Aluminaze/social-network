import React from 'react'
import style from './Users.module.css'

const Users = () => {
  return (
    <div>
      <div className={style.user__container}>
        <div className={style.user__data__leftSide}>
          <div className={style.user__photo}>Photo</div>
          <button className={style.user__followButton}>Unfollow</button>
        </div>
        <div className={style.user__data__rightSide}>
          <div className={style.user__info}>
            <div className={style.user__name}>Dmitry K.</div>
            <div className={style.user__location}>Belarus, Minsk</div>
          </div>
          <div className={style.user__status}>
            I'm glad to see you
          </div>
        </div>
      </div>
      <div className={style.user__container}>
        <div className={style.user__data__leftSide}>
          <div className={style.user__photo}>Photo</div>
          <button className={style.user__followButton}>Unfollow</button>
        </div>
        <div className={style.user__data__rightSide}>
          <div className={style.user__info}>
            <div className={style.user__name}>Dmitry K.</div>
            <div className={style.user__location}>Belarus, Minsk</div>
          </div>
          <div className={style.user__status}>
            I'm glad to see you
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users
