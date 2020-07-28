import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { userProfileRequest } from "../../redux/usersReducer";
import { compose } from "redux";
import {
  getProfileStatus,
  updateProfileStatus,
} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 9169;
    this.props.userProfileRequest(userId);
    this.props.getProfileStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        statusText={this.props.statusText}
        updateProfileStatus={this.props.updateProfileStatus}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  statusText: state.profilePage.statusText,
});

export default compose(
  connect(mapStateToProps, {
    userProfileRequest,
    getProfileStatus,
    updateProfileStatus,
  }),
  withRouter
)(ProfileContainer);
