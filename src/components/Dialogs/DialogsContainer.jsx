import React from 'react'
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
  let store = props.store
  let state = store.getState()

  let onSendNewMessage = (text) => {
    if (text) store.dispatch(sendMessageCreator())
  }

  let onChangeNewMessageText = (text) => {
    store.dispatch(updateNewMessageTextCreator(text))
  }

  return (
    <Dialogs
      onSendNewMessage={onSendNewMessage}
      onChangeNewMessageText={onChangeNewMessageText}
      dialogsData={state.dialogsPage.dialogs}
      messagesData={state.dialogsPage.messages}
      newMessageText={state.dialogsPage.newMessageText}
    />
  )
}

export default DialogsContainer
