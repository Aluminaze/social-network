import { createStore, combineReducers, applyMiddleware } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
