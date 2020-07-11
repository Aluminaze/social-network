import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
  let dialogsItems = props.dialogsData.map(item => <DialogItem name={item.name} id={item.id} key={item.id} />)
  let messageItems = props.messagesData.map(msg => <Message message={msg.message} key={msg.id} />)

  let newMessageElement = React.createRef()

  let onSendNewMessage = () => {
    let text = newMessageElement.current.value
    if (text) props.sendMessage(text)
  }

  let onChangeNewMessageText = () => {
    let text = newMessageElement.current.value
    props.updateNewMessageText(text)
  }

  return (
    <section className={style.dialogs}>
      <div className={style.dialogs__list}>
        {dialogsItems}
      </div>
      <div className={style.dialogs__messages}>
        <div className={style.dialogs__messages__list}>
          {messageItems}
        </div>
        <div className={style.newMessage__form}>
          <textarea onChange={onChangeNewMessageText} ref={newMessageElement} className={style.newMessage__form__text} value={props.newMessageText}></textarea>
          <button onClick={onSendNewMessage} className={style.newMessage__form__button}>Send</button>
        </div>
      </div>
    </section>
  )
}

export default Dialogs
