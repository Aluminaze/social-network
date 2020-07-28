import { userProfileAPI } from "../components/api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setProfileStatus = (statusText) => ({
  type: SET_PROFILE_STATUS,
  statusText,
});

export const getProfileStatus = (userId) => {
  return (dispatch) => {
    userProfileAPI.getUserStatus(userId).then((responce) => {
      dispatch(setProfileStatus(responce.data));
    });
  };
};

export const updateProfileStatus = (statusText) => {
  return (dispatch) => {
    console.log('updateProfileStatus STARTED');
    console.log('statusText: ', statusText);
    console.log('statusText: ', typeof statusText);
    userProfileAPI.updateUserStatus(statusText).then((responce) => {
      if (responce.data.resultCode === 0) {        
        dispatch(setUserProfile(statusText));
      }
    });
  };
};

let initialState = {
  posts: [
    {
      id: 0,
      message: "I'm create this application with React technology!",
      likesCount: 23,
    },
    { id: 1, message: "It's my second post on my page :)", likesCount: 12 },
    { id: 2, message: "It's my first post on my page. WoW!!!", likesCount: 5 },
    { id: 3, message: "Hi!", likesCount: 1 },
  ],
  newPostText: "New post text",
  profile: null,
  statusText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_PROFILE_STATUS: {
      return {
        ...state,
        statusText: action.statusText,
      };
    }
    default:
      return state;
  }
};

export default profileReducer;
