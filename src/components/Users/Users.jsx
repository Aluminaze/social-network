import React from 'react'
import style from './Users.module.css'
import User from './User/User'
import * as axios from 'axios'

class Users extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
      this.props.setUsers(responce.data.items)
    })
  }

  render() {
    console.log(`render`)

    let usersList = this.props.users.map(user => (
      <User
        followed={user.followed}
        name={user.name}
        status={user.status}
        city={user.status}
        country={user.status}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        key={this.props.id}
        id={user.id}
      />
    ))

    return (
      <div>{usersList}</div>
    )
  }
}

export default Users
