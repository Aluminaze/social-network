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

    getState() {
        return this._state;
    },

    addPost() {
        let newPost = {
            id: 0,
            message: this._state.newPostText,
            likesCount: 0
        }
        this._state.posts.push(newPost)
        this._state.newPostText = ''
        this._rerenderEntireThree(this._state)
    },

    updateNewMessageText(textMessage) {
        this._state.newMessageText = textMessage
        this._rerenderEntireThree(this._state)
    },

    sentMessage(textMessage) {
        let newMessage = {
            id: 1,
            message: textMessage
        }
        this._state.messages.push(newMessage)
        this._state.newMessageText = ''
        this._rerenderEntireThree(this._state)
    },

    updateNewPostText(newText) {
        this._state.newPostText = newText
        this._rerenderEntireThree(this._state)
    },

    _rerenderEntireThree() {
        console.log(`rendered...`)
    },

    subscribe(observer) {
        this._rerenderEntireThree = observer
    }
}

window.store = store;
export default store