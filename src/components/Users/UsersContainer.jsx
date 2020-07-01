import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { followCreater, unfollowCreater, setUsersCreater, setCurrentPageCreater, setUsersTotalCountCreater } from '../../redux/usersReducer'

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
