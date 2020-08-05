import { userProfileAPI } from "../components/api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";

export const addPost = (postText) => ({ type: ADD_POST, postText });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setProfileStatus = (statusText) => ({
  type: SET_PROFILE_STATUS,
  statusText,
});

export const getProfileStatus = (userId) => async (dispatch) => {
  const responce = await userProfileAPI.getUserStatus(userId);
  dispatch(setProfileStatus(responce.data));
};

export const updateProfileStatus = (statusText) => async (dispatch) => {
  const responce = await userProfileAPI.updateUserStatus(statusText);
  if (responce.data.resultCode === 0) dispatch(setUserProfile(statusText));
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
  profile: null,
  statusText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: action.postText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
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
