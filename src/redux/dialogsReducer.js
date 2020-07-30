const SEND_MESSAGE = "SEND-MESSAGE";

export const sendMessage = (messageText) => ({ type: SEND_MESSAGE, messageText });

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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: 3,
        message: action.messageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      };
    }
    default:
      return state;
  }
};

export default dialogsReducer;
