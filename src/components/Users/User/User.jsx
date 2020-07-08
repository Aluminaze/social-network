import React from "react";
import style from "./User.module.css";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

const User = (props) => {
  return (
    <div className={style.user__container}>
      <div className={style.user__data__leftSide}>
        <NavLink to={`/profile/${props.id}`}>
          {props.photo != null ? (
            <img
              className={style.user__photo}
              src={props.photo}
              alt="profile_photo"
            />
          ) : (
            <div className={style.user__photo}>Photo</div>
          )}
        </NavLink>

        {props.followed ? (
          <button
            className={style.user__followButton}
            onClick={() => {
              axios
                .delete(
                  `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                  {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "f47758dc-ac2e-4438-8bf8-7911ee363dd2",
                    },
                  }
                )
                .then((response) => {
                  if (response.data.resultCode === 0) props.unfollow(props.id);
                });
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            className={style.user__followButton}
            onClick={() => {
              axios
                .post(
                  `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                  {},
                  {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "f47758dc-ac2e-4438-8bf8-7911ee363dd2",
                    },
                  }
                )
                .then((response) => {
                  if (response.data.resultCode === 0) props.follow(props.id);
                });
            }}
          >
            Follow
          </button>
        )}
      </div>
      <div className={style.user__data__rightSide}>
        <div className={style.user__info}>
          <div className={style.user__name}> {`${props.name}`} </div>
          <div className={style.user__location}>
            {" "}
            {`${props.country}`}, {`${props.city}`}{" "}
          </div>
        </div>
        <div className={style.user__status}> {`${props.status}`} </div>
      </div>
    </div>
  );
};

export default User;
