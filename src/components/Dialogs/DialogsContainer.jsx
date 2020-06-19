import React from 'react'
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogs,
    messagesData: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onSendNewMessage: (text) => { if(text) dispatch(sendMessageCreator()) },
    onChangeNewMessageText: (text) => { dispatch(updateNewMessageTextCreator(text)) }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
