import React from "react";
import { sendMessage } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../hoc/AuthRedirect";
import { compose } from "redux";

const DialogsContainer = (props) => {
  return (
    <Dialogs
      dialogsData={props.dialogsData}
      messagesData={props.messagesData}
      newMessageText={props.newMessageText}
      sendMessage={props.sendMessage}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogs,
    messagesData: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

export default compose(
  connect(mapStateToProps, { sendMessage }),
  withAuthRedirect
)(DialogsContainer);
