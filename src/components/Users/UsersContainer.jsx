import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  setFollowingInProgress,
  getUsers,
} from "../../redux/usersReducer";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageCountSize, this.props.currentPage);
  }

  onPageChange = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.getUsers(this.props.pageCountSize, currentPage);
  };

  render() {
    return (
      <Users
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        id={this.props.id}
        key={this.props.id}
        usersTotalCount={this.props.usersTotalCount}
        pageCountSize={this.props.pageCountSize}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        isFetching={this.props.isFetching}
        setFollowingInProgress={this.props.setFollowingInProgress}
        followingInProgress={this.props.followingInProgress}
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
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  setFollowingInProgress,
  getUsers,
})(UsersContainer);
