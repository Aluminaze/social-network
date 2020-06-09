import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

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
        // console.log('Renred...')
    },

    subscribe(observer) {
        this._rerenderEntireThree = observer
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state = dialogsReducer(this._state, action)
        this._state = profileReducer(this._state, action)
        this._rerenderEntireThree(this._state)
    }
}

window.store = store;
export default store