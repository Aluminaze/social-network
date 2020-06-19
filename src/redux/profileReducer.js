const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const addPostCreator = () => ({ type: ADD_POST })
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

let initialState = {
  posts: [
    { id: 0, message: "I'm create this application with React technology!", likesCount: 23 },
    { id: 1, message: "It's my second post on my page :)", likesCount: 12 },
    { id: 2, message: "It's my first post on my page. WoW!!!", likesCount: 5 },
    { id: 3, message: "Hi!", likesCount: 1 }
  ],
  newPostText: "New post text"
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0
      }

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    default:
      return state
  }
}

export default profileReducer
