import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { followCreater, unfollowCreater, setUsersCreater } from '../../redux/usersReducer'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followCreater(userId)),
        unfollow: (userId) => dispatch(unfollowCreater(userId)),
        setUsers: (users) => dispatch(setUsersCreater(users))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
