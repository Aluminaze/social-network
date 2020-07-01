import React from 'react'
import style from './Users.module.css'
import User from './User/User'
import * as axios from 'axios'

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageCountSize}&page=${this.props.currentPage}`)
      .then(responce => { 
        this.props.setUsers(responce.data.items) 
        this.props.setUsersTotalCount(responce.data.totalCount)
      })
  }

  onPageChange = (currentPage) => {
    console.log(`current page is ${this.props.currentPage}`)

    this.props.setCurrentPage(currentPage)    

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageCountSize}&page=${currentPage}`)
      .then(responce => { 
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

    let countPages = Math.ceil(this.props.usersTotalCount / this.props.pageCountSize)
    let pages = []

    for (let i = 1; i <= countPages; i++) {
      // TODO
      // Pagination
      if(i <= 15) pages.push(i)
    }

    return (
      <div>
        {pages.map(page => { return <span onClick={() => this.onPageChange(page)} className={page === this.props.currentPage && style.current__page}>{page}</span> })}
        {usersList}
      </div>
    )
  }
}

export default Users
