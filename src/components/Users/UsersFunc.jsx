import React from 'react'
import style from './Users.module.css'
import User from './User/User'
import * as axios from 'axios'

const Users = (props) => {
  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
      props.setUsers(responce.data.items)
    })
  }

  let usersList = props.users.map(user => (
    <User
      followed={user.followed}
      name={user.name}
      status={user.status}
      city={user.status}
      country={user.status}
      follow={props.follow}
      unfollow={props.unfollow}
      key={props.id}
      id={user.id}
    />
  ))

  console.log('userList')

  return (
    <div>
      {usersList}
    </div>

    // <div>
    //   {
    //     props.users.map(user => (
    //       <div key={user.id}>
    //         <div className={style.user__container}>
    //           <div className={style.user__data__leftSide}>
    //             <div className={style.user__photo}>Photo</div>
    //             {(user.followed)
    //               ? <button className={style.user__followButton}
    //                 onClick={() => {
    //                   console.log('unfollow')
    //                   props.unfollow(user.id)
    //                   console.log(user)
    //                 }}>Unfollow</button>
    //               : <button className={style.user__followButton}
    //                 onClick={() => {
    //                   console.log('follow')
    //                   props.follow(user.id)
    //                   console.log(user)
    //                 }}>Follow</button>
    //             }
    //           </div>
    //           <div className={style.user__data__rightSide}>
    //             <div className={style.user__info}>
    //               <div className={style.user__name}> {`${props.fullName}`} </div>
    //               <div className={style.user__location}> {`${props.country}`}, {`${props.city}`} </div>
    //             </div>
    //             <div className={style.user__status}> {`${props.status}`} </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))
    //   }
    // </div>
  )
}

export default Users
