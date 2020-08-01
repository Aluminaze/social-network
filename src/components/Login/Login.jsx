import React from "react";
import style from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator,
  minLengthCreator,
} from "../../utils/validators/validators";
import { InputForm } from "../../components/common/FormsControls/FormsContols";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";

const maxLength30 = maxLengthCreator(30);
const minLength3 = minLengthCreator(3);

let LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.login__form}>
      <Field
        className={style.login__login}
        validate={[required, minLength3, maxLength30]}
        name="email"
        component={InputForm}
        type="text"
      />
      <Field
        className={style.login__password}
        validate={[required]}
        name="password"
        component="input"
        type="password"
      />
      <div className={style.login__checkbox}>
        <Field name="rememberMe" component="input" type="checkbox" />
        Remember me
      </div>
      { props.error && <div className={style.login__error}>
        {props.error}
      </div>}
      <button type="submit">Login</button>
    </form>
  );
};

LoginForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (data) => {
    let { email, password, rememberMe } = data;
    props.login(email, password, rememberMe);
  };

  if (props.isAuthorized) return <Redirect to={"/profile"} />;

  return (
    <div>
      <h1>Login process</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.auth.isAuthorized,
  };
};

export default connect(mapStateToProps, { login })(Login);
