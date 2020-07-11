const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

export const setAuthUserData = (userId, login, email) => ({
  type: SET_AUTH_USER_DATA,
  data: { userId, login, email },
});

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
        isAuthorized: true,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
