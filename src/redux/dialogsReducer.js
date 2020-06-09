const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, textMessage: text})

const dialogsReducer = (state, action) => {
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