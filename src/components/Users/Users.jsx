import React from 'react'
import { } from '../../redux/usersReducer'
import style from './Users.module.css'
import User from './User/User'

const Users = (props) => {
  let usersList = props.users.map(user => (
    <User
      isFollow={user.followed}
      fullName={user.fullName}
      status={user.status}
      city={user.location.city}
      country={user.location.country}
    />
  ))
  
  return (
    <div>
      {usersList}
    </div>
  )
}

export default Users
