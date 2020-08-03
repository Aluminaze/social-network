import { getAuthUserData } from './authReducer'

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})


export const initailizeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  
  promise.then(() => {
    dispatch(initializedSuccess())
  })
}

let initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true
      };
    }
    default:
      return state;
  }
};

export default appReducer;
