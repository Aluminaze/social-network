export const getUsers = (state) => {
  return state.usersPage.users;
};

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
