import React from "react";
import style from "./PostForm.module.css";
import { Field, reduxForm } from "redux-form";

let PostForm = (props) => {
  return (
    <form className={style.posts__form} onSubmit={props.handleSubmit}>
      <Field
        className={style.posts__form__input}
        component="textarea"
        name="postInput"
        type="text"
      />
      <button className={style.posts__form__submit} type="submit">
        Add post
      </button>
    </form>
  );
};

PostForm = reduxForm({
  form: "post",
})(PostForm);

export default PostForm;
