import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  setCurrentPage,
  getUsers,
  toFollow,
  toUnfollow,
} from "../../redux/usersReducer";
import { Redirect } from "react-router-dom";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageCountSize, this.props.currentPage);
  }

  onPageChange = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.getUsers(this.props.pageCountSize, currentPage);
  };

  render() {
    if (!this.props.isAuthorized) return <Redirect to={"/login"} />;
    else
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
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    usersTotalCount: state.usersPage.usersTotalCount,
    pageCountSize: state.usersPage.pageCountSize,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    isAuthorized: state.auth.isAuthorized,
  };
};

export default connect(mapStateToProps, {
  setCurrentPage,
  getUsers,
  toFollow,
  toUnfollow,
})(UsersContainer);
