import React from 'react'
import style from './Users.module.css'
import User from './User/User'

const Users = (props) => {
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

  let countPages = Math.ceil(props.usersTotalCount / props.pageCountSize)
  let pages = []

  for (let i = 1; i <= countPages; i++) {
    // TODO
    // Pagination
    if (i <= 15) pages.push(i)
  }

  return (
    <div>
      {pages.map(page => { 
        return <span onClick={() => props.onPageChange(page)} 
        className={page === props.currentPage ? style.current__page : null}>{page}</span> })}
      {usersList}
    </div>
  )
}

export default Users
