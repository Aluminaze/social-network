import React from "react";
import style from "./User.module.css";
import { NavLink } from "react-router-dom";
import { userAPI } from "../../api/api";

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
            disabled={props.followingInProgress.some(
              (userId) => userId === props.id
            )}
            className={
              props.followingInProgress.some((userId) => userId === props.id)
                ? style.user__followButton__disable
                : style.user__followButton__enable
            }
            onClick={() => {
              props.setFollowingInProgress(true, props.id);
              userAPI.unfollow(props.id).then((data) => {
                if (data.resultCode === 0) props.unfollow(props.id);
                props.setFollowingInProgress(false, props.id);
              });
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={props.followingInProgress.some(
              (userId) => userId === props.id
            )}
            className={
              props.followingInProgress.some((userId) => userId === props.id)
                ? style.user__followButton__disable
                : style.user__followButton__enable
            }
            onClick={() => {
              props.setFollowingInProgress(true, props.id);
              userAPI.follow(props.id).then((data) => {
                if (data.resultCode === 0) props.follow(props.id);
                props.setFollowingInProgress(false, props.id);
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
