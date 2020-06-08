const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {
    _state: {
        newPostText: "",
        newMessageText: "",
        posts: [
            { id: 0, message: "I'm create this application with React technology!", likesCount: 23 },
            { id: 0, message: "It's my second post on my page :)", likesCount: 12 },
            { id: 0, message: "It's my first post on my page. WoW!!!", likesCount: 5 },
            { id: 0, message: "Hi!", likesCount: 1 }
        ],
        messages: [
            { id: 1, message: "Hi!" },
            { id: 1, message: "Whatsaaaaaaap?" }
        ],
        dialogs: [
            { id: 1, name: "Alexa" },
            { id: 2, name: "Thomas" },
            { id: 3, name: "Jessi" },
            { id: 4, name: "Brad" },
            { id: 5, name: "Angel" },
            { id: 6, name: "Bessy" },
            { id: 7, name: "Vegas" }
        ]
    },

    _rerenderEntireThree() {
        console.log('Renred...')
    },

    subscribe(observer) {
        this._rerenderEntireThree = observer
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: 0,
                message: this._state.newPostText,
                likesCount: 0
            }
            this._state.posts.push(newPost)
            this._state.newPostText = ''
            this._rerenderEntireThree(this._state)
        } else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._state.newPostText = action.newText
            this._rerenderEntireThree(this._state)
        } else if(action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 1,
                message: this._state.newMessageText
            }
            this._state.messages.push(newMessage)
            this._state.newMessageText = ''
            this._rerenderEntireThree(this._state)
        } else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.newMessageText = action.textMessage
            this._rerenderEntireThree(this._state)
        }
    }
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, textMessage: text});

window.store = store;
export default store