import React from "react";
import { sendMessage, updateNewMessageText } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const DialogsContainer = (props) => {
  return (
    <Dialogs
      dialogsData={props.dialogsData}
      messagesData={props.messagesData}
      newMessageText={props.newMessageText}
      sendMessage={props.sendMessage}
      updateNewMessageText={props.updateNewMessageText}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogs,
    messagesData: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};
export default connect(mapStateToProps, { sendMessage, updateNewMessageText })(
  DialogsContainer
);
