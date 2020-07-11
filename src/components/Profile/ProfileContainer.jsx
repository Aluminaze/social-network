import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { userProfileRequest } from "../../redux/usersReducer";

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

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuthorized: state.auth.isAuthorized,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { userProfileRequest })(
  WithUrlDataContainerComponent
);
