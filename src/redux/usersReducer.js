const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export const followCreater = (userId) => ({ type: FOLLOW, userId: userId })
export const unfollowCreater = (userId) => ({ type: UNFOLLOW, userId: userId })
export const setUsersCreater = (users) => ({ type: SET_USERS, users: users })

let initialState = {
  users: []
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
        users: [...state.users, ...action.users]
      }
    }
    default:
      return state
  }
}

export default usersReducer
