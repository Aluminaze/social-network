import React from "react";
import style from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import { required, maxLength15, minLength3 } from "../../utils/validators/validators";
import { InputForm } from "../../components/common/FormsControls/FormsContols"

let LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.login__form}>
      {/* <Field className={style.login__login} validate={[required, maxLength15]} name="loginInput" component="input" type="text"/> */}
      <Field
        className={style.login__login}
        validate={[required, maxLength15, minLength3]}
        name="loginInput"
        component={InputForm}
        type="text"
      />

      <Field
        className={style.login__password}
        name="passwordInput"
        component="input"
        type="password"
      />
      <div className={style.login__checkbox}>
        <Field name="rememberMe" component="input" type="checkbox" />
        Remember me
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

LoginForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  // const { handleSubmit } = props;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Login process</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
