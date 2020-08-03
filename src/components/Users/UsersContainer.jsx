import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  setCurrentPage,
  getUsersRequest,
  toFollow,
  toUnfollow,
} from "../../redux/usersReducer";
import { withAuthRedirect } from "../hoc/AuthRedirect";
import { compose } from "redux";
import {
  getUsers,
  getCurrentPage,
  getUsersTotalCount,
  getPageCountSize,
  getIsFetching,
  getFollowingInProgress,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersRequest(
      this.props.pageCountSize,
      this.props.currentPage
    );
  }

  onPageChange = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.getUsersRequest(this.props.pageCountSize, currentPage);
  };

  render() {
    return (
      <Users
        users={this.props.users}
        id={this.props.id}
        key={this.props.id}
        usersTotalCount={this.props.usersTotalCount}
        pageCountSize={this.props.pageCountSize}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        isFetching={this.props.isFetching}
        followingInProgress={this.props.followingInProgress}
        toFollow={this.props.toFollow}
        toUnfollow={this.props.toUnfollow}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    currentPage: getCurrentPage(state),
    usersTotalCount: getUsersTotalCount(state),
    pageCountSize: getPageCountSize(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    getUsersRequest,
    toFollow,
    toUnfollow,
    getUsers,
    getCurrentPage,
    getUsersTotalCount,
    getPageCountSize,
    getIsFetching,
    getFollowingInProgress,
  }),
  withAuthRedirect
)(UsersContainer);
