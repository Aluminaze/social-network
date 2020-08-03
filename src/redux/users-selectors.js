import { createSelector } from "reselect";

export const getUsersSelector = (state) => {
  return state.usersPage.users;
};
export const getUsers = createSelector(getUsersSelector, (users) =>
  users.filter((user) => true)
);

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getUsersTotalCount = (state) => {
  return state.usersPage.usersTotalCount;
};

export const getPageCountSize = (state) => {
  return state.usersPage.pageCountSize;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};
