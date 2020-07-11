import React from "react";
import { sendMessage, updateNewMessageText } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogs,
    messagesData: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const DialogsContainer = connect(mapStateToProps, {
  sendMessage,
  updateNewMessageText,
})(Dialogs);

export default DialogsContainer;
