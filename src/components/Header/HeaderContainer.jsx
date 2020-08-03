import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuthorized: state.auth.isAuthorized,
  login: state.auth.login,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
