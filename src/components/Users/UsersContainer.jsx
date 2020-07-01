import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { followCreater, unfollowCreater, setUsersCreater, setCurrentPageCreater, setUsersTotalCountCreater } from '../../redux/usersReducer'
import * as axios from 'axios'

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageCountSize}&page=${this.props.currentPage}`)
      .then(responce => {
        this.props.setUsers(responce.data.items)
        this.props.setUsersTotalCount(responce.data.totalCount)
      })
  }

  onPageChange = (currentPage) => {
    this.props.setCurrentPage(currentPage)

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageCountSize}&page=${currentPage}`)
      .then(responce => {
        this.props.setUsers(responce.data.items)
      })
  }

  render() {
    return <Users
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      id={this.props.id}
      key={this.props.id}
      usersTotalCount={this.props.usersTotalCount}
      pageCountSize={this.props.pageCountSize}
      currentPage={this.props.currentPage}
      onPageChange={this.onPageChange}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    usersTotalCount: state.usersPage.usersTotalCount,
    pageCountSize: state.usersPage.pageCountSize
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followCreater(userId)),
    unfollow: (userId) => dispatch(unfollowCreater(userId)),
    setUsers: (users) => dispatch(setUsersCreater(users)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageCreater(currentPage)),
    setUsersTotalCount: (usersTotalCount) => dispatch(setUsersTotalCountCreater(usersTotalCount))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
