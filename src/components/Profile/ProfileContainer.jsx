import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { userProfileRequest } from "../../redux/usersReducer";
import { withAuthRedirect } from "../hoc/AuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    this.props.userProfileRequest(userId);
  }

  render() {
    if (!this.props.isAuthorized) return <Redirect to={"/login"} />;
    else return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { userProfileRequest }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
