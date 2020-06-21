const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export const follow = (userId) => ({ type: FOLLOW, userId: userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId: userId })
export const setUsers = (users) => ({ type: SET_USERS, users: users })

let initialState = {
  users: [
    { id: 1, followed: false, fullName: 'Michael', status: 'Im a good friend', location: { city: 'Kiev', country: 'Ukraine' } },
    { id: 2, followed: true, fullName: 'John', status: 'Just chill', location: { city: 'London', country: 'Great Britain' } },
    { id: 3, followed: false, fullName: 'Kira', status: 'Make a good mood', location: { city: 'Miami', country: 'USA' } }
  ]
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      let stateCopy = {
        ...state,
        users: state.users.map(u => {
          if (action.userId === u.id) {
            return { ...u, followed: true }
          }
          return { ...u }
        })
      }
    }
    case UNFOLLOW: {
      let stateCopy = {
        ...state,
        users: state.users.map(u => {
          if (action.userId == u.id) {
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
