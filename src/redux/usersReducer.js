import { usersAPI } from "../components/api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const SET_FETCHING_STATUS = 'SET_FETCHING_STATUS'
const SET_FOLLOWING_IN_PROGRESS = 'SET_FOLLOWING_IN_PROGRESS'

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (usersTotalCount) => ({ type: SET_USERS_TOTAL_COUNT, usersTotalCount })
export const setFetchingStatus = (isFetching) => ({type: SET_FETCHING_STATUS, isFetching})
export const setFollowingInProgress = (followingInProgress, userId) => ({type: SET_FOLLOWING_IN_PROGRESS, followingInProgress, userId})

export const getUsers = (pageCountSize, currentPage) => {
  return dispatch => {
    dispatch(setFetchingStatus(true));
    dispatch(setUsers([]));
    
    usersAPI
      .getUsers(pageCountSize, currentPage)
      .then((data) => {
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
        dispatch(setFetchingStatus(false));
      });
  }
}

let initialState = {
  users: [],
  pageCountSize: 5,
  usersTotalCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
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
    case SET_FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.followingInProgress
        ? [...state.followingInProgress, action.userId]
        : state.followingInProgress.filter(userId => userId !== action.userId)
      }
    }
    default:
      return state
  }
}

export default usersReducer
