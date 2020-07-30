import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";

let NewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.newMessage__form}>
      <Field
        className={style.newMessage__form__text}
        name="newTextMessage"
        component="textarea"
        type="text"
      />
      <button className={style.newMessage__form__button} type="submit">Send</button>
    </form>
  );
};

NewMessageForm = reduxForm({
  form: "newMessage",
})(NewMessageForm);

const Dialogs = (props) => {
  let dialogsItems = props.dialogsData.map((item) => (
    <DialogItem name={item.name} id={item.id} key={item.id} />
  ));
  let messageItems = props.messagesData.map((msg) => (
    <Message message={msg.message} key={msg.id} />
  ));

  let newMessageElement = React.createRef();

  let onSendNewMessage = () => {
    let text = newMessageElement.current.value;
    if (text) props.sendMessage(text);
  };

  let onChangeNewMessageText = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  let onSubmit = (newMessageText) => {
    console.log(newMessageText);
  };

  return (
    <section className={style.dialogs}>
      <div className={style.dialogs__list}>{dialogsItems}</div>
      <div className={style.dialogs__messages}>
        <div className={style.dialogs__messages__list}>{messageItems}</div>
        <NewMessageForm onSubmit={onSubmit} />
      </div>
    </section>
  );
};

export default Dialogs;
