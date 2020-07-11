const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const sendMessage = () => ({ type: SEND_MESSAGE });
export const updateNewMessageText = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  textMessage: text,
});

let initialState = {
  messages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "Whatsaaaaaaap?" },
  ],
  dialogs: [
    { id: 1, name: "Alexa" },
    { id: 2, name: "Thomas" },
    { id: 3, name: "Jessi" },
    { id: 4, name: "Brad" },
    { id: 5, name: "Angel" },
    { id: 6, name: "Bessy" },
    { id: 7, name: "Vegas" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: 3,
        message: state.newMessageText,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: "",
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.textMessage,
      };
    }
    default:
      return state;
  }
};

export default dialogsReducer;
