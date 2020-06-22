import React from 'react'
import style from './Users.module.css'
import User from './User/User'

const Users = (props) => {
  if(props.users.length === 0){
    props.setUsers([
    { id: 1, followed: false, fullName: 'Michael', status: 'Im a good friend', location: { city: 'Kiev', country: 'Ukraine' } },
    { id: 2, followed: true, fullName: 'John', status: 'Just chill', location: { city: 'London', country: 'Great Britain' } },
    { id: 3, followed: false, fullName: 'Kira', status: 'Make a good mood', location: { city: 'Miami', country: 'USA' } }
  ])}

  let usersList = props.users.map(user => (
    <User
      isFollow={user.followed}
      fullName={user.fullName}
      status={user.status}
      city={user.location.city}
      country={user.location.country}
      follow={props.follow}
      unfollow={props.unfollow}
      key={props.id}
      id={user.id}
    />
  ))

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
