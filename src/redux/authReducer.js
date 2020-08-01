import { authAPI } from "../components/api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

export const setAuthUserData = (userId, login, email, isAuthorized) => ({
  type: SET_AUTH_USER_DATA,
  data: { userId, login, email, isAuthorized },
});

export const getAuthUserData = () => (dispatch) => {
  authAPI.isAuthorized().then((responce) => {
    if (responce.resultCode === 0) {
      let { id, login, email } = responce.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((responce) => {
    if (responce.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let infoErrorMessage =
        responce.data.messages.length > 0
          ? responce.data.messages[0]
          : "unknown error";
      dispatch(stopSubmit("login", {_error: infoErrorMessage }));
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((responce) => {
    if (responce.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuthorized: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
