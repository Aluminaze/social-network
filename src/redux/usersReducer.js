const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const SET_FETCHING_STATUS = 'SET_FETCHING_STATUS'

export const followCreater = (userId) => ({ type: FOLLOW, userId })
export const unfollowCreater = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersCreater = (users) => ({ type: SET_USERS, users })
export const setCurrentPageCreater = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCountCreater = (usersTotalCount) => ({ type: SET_USERS_TOTAL_COUNT, usersTotalCount })
export const setFetchingStatus = (isFetching) => ({type: SET_FETCHING_STATUS, isFetching})

let initialState = {
  users: [],
  pageCountSize: 5,
  usersTotalCount: 0,
  currentPage: 1,
  isFetching: true
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
    case SET_FETCHING_STATUS: {
      return {
        ...state,
        isFetching: action.isFetching
      }
    }
    default:
      return state
  }
}

export default usersReducer
