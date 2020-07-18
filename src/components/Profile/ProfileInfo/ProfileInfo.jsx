import React from "react";
import style from "./ProfileInfo.module.css";

class ProfileInfo extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode() {
    this.setState({
      editMode: true,
    });
  }

  deactivateEditMode() {
    this.setState({
      editMode: false,
    });
  }

  render() {
    debugger;
    return (
      <div className={style.profileInfo__block}>
        <img
          className={style.profileInfo__photo}
          src={this.props.profile.photos.large}
          alt="profile_photo"
        />
        {this.state.editMode ? (
          <input
            autoFocus='true'
            onBlur={this.deactivateEditMode.bind(this)}
            className={style.profileInfo__statusInput}
            type="text"
            value={this.props.profileStatus}
          />
        ) : (
          <span
            onDoubleClick={this.activateEditMode.bind(this)}
            className={style.profileInfo__status}
          >
            {this.props.profileStatus}
          </span>
        )}
      </div>
    );
  }
}

export default ProfileInfo;
