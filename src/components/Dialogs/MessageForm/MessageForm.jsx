import React from "react";
import style from "./MessageForm.module.css";
import { Field, reduxForm } from "redux-form";

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.messageForm}>
      <Field
        className={style.messageForm__text}
        name="messageInput"
        component="textarea"
        type="text"
      />
      <button className={style.messageForm__button} type="submit">
        Send
      </button>
    </form>
  );
};

export default reduxForm({
  form: "newMessage",
})(MessageForm);
