import React from "react";
import style from "./ProfileInfo.module.css";

class ProfileInfo extends React.Component {
  constructor(props) {
    super(props);
    this.editedStatusText = React.createRef();    
  }

  state = {
    editMode: false,
    statusText: this.props.statusText,
  };

  onChangeUpdateStatusText() {
    this.setState({
      statusText: this.editedStatusText.current.value,
    });
  }

  activateEditMode() {
    this.setState({
      editMode: true,
    });
  }

  deactivateEditMode() {
    this.setState({
      editMode: false,
    });
    this.props.updateProfileStatus(this.state.statusText);
  }

  render() {
    return (
      <div className={style.profileInfo__block}>
        <img
          className={style.profileInfo__photo}
          src={this.props.profilePhotoLarge}
          alt="profile_photo"
        />
        {this.state.editMode ? (
          <input
            ref={this.editedStatusText}
            onChange={this.onChangeUpdateStatusText.bind(this)}
            autoFocus={true}
            onBlur={this.deactivateEditMode.bind(this)}
            className={style.profileInfo__statusInput}
            type="text"
            value={this.state.statusText}
          />
        ) : (
          <span
            onClick={this.activateEditMode.bind(this)}
            className={style.profileInfo__status}
          >
            {this.state.statusText || "status text field is empty"}
          </span>
        )}
      </div>
    );
  }
}

export default ProfileInfo;
