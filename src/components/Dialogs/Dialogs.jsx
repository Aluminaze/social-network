import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import MessageForm from "./MessageForm/MessageForm";

const Dialogs = (props) => {
  const dialogsItems = props.dialogsData.map((item) => (
    <DialogItem name={item.name} id={item.id} key={item.id} />
  ));
  const messageItems = props.messagesData.map((msg) => (
    <Message message={msg.message} key={msg.id} />
  ));

  const onSubmit = (values) => {
    if(values.messageInput) props.sendMessage(values.messageInput)
  };

  return (
    <section className={style.dialogs}>
      <div className={style.dialogs__list}>{dialogsItems}</div>
      <div className={style.dialogs__messages}>
        <div className={style.dialogs__messages__list}>{messageItems}</div>
        <MessageForm onSubmit={onSubmit} />
      </div>
    </section>
  );
};

export default Dialogs;
