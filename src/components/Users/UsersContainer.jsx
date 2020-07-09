import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  setFetchingStatus,
} from "../../redux/usersReducer";
import { usersAPI } from "../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setFetchingStatus(true);

    usersAPI
      .getUsers(this.props.pageCountSize, this.props.currentPage)
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.setUsersTotalCount(data.totalCount);
        this.props.setFetchingStatus(false);
      });
  }

  onPageChange = (currentPage) => {
    this.props.setFetchingStatus(true);
    this.props.setCurrentPage(currentPage);
    this.props.setUsers([]);

    usersAPI
      .getUsers(this.props.pageCountSize, this.props.currentPage).then((data) => {
      this.props.setUsers(data.items);
      this.props.setFetchingStatus(false);
    });
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
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  setFetchingStatus,
})(UsersContainer);
