import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "f47758dc-ac2e-4438-8bf8-7911ee363dd2",
  },
});

export const usersAPI = {
  getUsers(pageCountSize = 5, currentPage = 1) {
    return instance
      .get(`users?count=${pageCountSize}&page=${currentPage}`)
      .then((responce) => responce.data);
  },
};

export const userAPI = {
  unfollow(userId) {
    return instance
      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
      .then((responce) => responce.data);
  },
  follow(userId) {
    return instance
      .post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
      .then((responce) => responce.data);
  },
};
