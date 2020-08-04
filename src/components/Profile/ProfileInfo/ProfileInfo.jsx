import React, { useState } from "react";
import style from "./ProfileInfo.module.css";
import { useEffect } from "react";

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [statusText, setStatusText] = useState(props.statusText);

  const onChangeStatusText = (e) => {
    setStatusText(e.currentTarget.value);
  };

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateProfileStatus(statusText);
  };

  useEffect(() => {
    setStatusText(props.statusText)
  }, [props.statusText])

  return (
    <div className={style.profileInfo__block}>
      <img
        className={style.profileInfo__photo}
        src={props.profilePhotoLarge}
        alt="profile_photo"
      />
      {editMode ? (
        <input
          onChange={onChangeStatusText}
          autoFocus={true}
          onBlur={deactivateEditMode}
          className={style.profileInfo__statusInput}
          type="text"
          value={statusText}
        />
      ) : (
        <span onClick={activateEditMode} className={style.profileInfo__status}>
          {statusText || "status text field is empty"}
        </span>
      )}
    </div>
  );
};

export default ProfileInfo;
