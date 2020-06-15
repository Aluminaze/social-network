const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, textMessage: text})

let initialState = {
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
    ],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {
    if(action.type === SEND_MESSAGE) {
        let newMessage = {
            id: 1,
            message: state.newMessageText
        }
        state.messages.push(newMessage)
        state.newMessageText = ''
    } else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.textMessage
    }

    return state
}

export default dialogsReducer