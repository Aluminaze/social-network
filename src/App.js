import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./style/css/App.css";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initailizeApp } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initailizeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader isFetching={true} />;
    else
      return (
        <section className="container">
          <HeaderContainer />
          <section className="wrapper">
            <NavBar />
            <section className="content">
              <Switch>
                <Route
                  path="/profile/:userId?"
                  render={() => <ProfileContainer />}
                />
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/news" render={() => <News />} />
                <Route path="/music" render={() => <Music />} />
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/settings" render={() => <Settings />} />
                <Route path="/login" render={() => <Login />} />
              </Switch>
            </section>
          </section>
        </section>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {initailizeApp})
)(App);
