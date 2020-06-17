const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const addPostCreator = () => ({ type: ADD_POST })
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

let initialState = {
    posts: [
        { id: 0, message: "I'm create this application with React technology!", likesCount: 23 },
        { id: 0, message: "It's my second post on my page :)", likesCount: 12 },
        { id: 0, message: "It's my first post on my page. WoW!!!", likesCount: 5 },
        { id: 0, message: "Hi!", likesCount: 1 }
    ],
    newPostText: "HELLO"
}

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 0,
            message: state.newPostText,
            likesCount: 0
        }
        state.posts.push(newPost)
        state.newPostText = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText
    }

    return state
}

export default profileReducer
