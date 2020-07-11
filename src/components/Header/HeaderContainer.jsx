import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { authRequest } from "../../redux/usersReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
   this.props.authRequest();
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuthorized: state.auth.isAuthorized,
  login: state.auth.login,
});

export default connect(mapStateToProps, { authRequest })(HeaderContainer);
