import React from "react";
import Header from "./Header";
import { setAuthUserData } from "../../redux/authReducer";
import { connect } from "react-redux";
import { authAPI } from "../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.isAuthorized().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        this.props.setAuthUserData(id, login, email);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuthorized: state.auth.isAuthorized,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
