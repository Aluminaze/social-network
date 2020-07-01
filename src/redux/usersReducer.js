import { act } from "@testing-library/react"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'

export const followCreater = (userId) => ({ type: FOLLOW, userId: userId })
export const unfollowCreater = (userId) => ({ type: UNFOLLOW, userId: userId })
export const setUsersCreater = (users) => ({ type: SET_USERS, users: users })
export const setCurrentPageCreater = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })
export const setUsersTotalCountCreater = (usersTotalCount) => ({ type: SET_USERS_TOTAL_COUNT, usersTotalCount: usersTotalCount })

let initialState = {
  users: [],
  pageCountSize: 5,
  usersTotalCount: 0,
  currentPage: 1
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (action.userId === u.id) {
            return { ...u, followed: true }
          } else {
            return { ...u }
          }
        })
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (action.userId === u.id) {
            return { ...u, followed: false }
          }
          return { ...u }
        })
      }
    }
    case SET_USERS: {
      return {
        ...state,
        users: action.users
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }
    case SET_USERS_TOTAL_COUNT: {
      return {
        ...state,
        usersTotalCount: action.usersTotalCount
      }
    }
    default:
      return state
  }
}

export default usersReducer
