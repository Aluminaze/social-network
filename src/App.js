import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./style/css/App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <section className="container">
        <Header />
        <section className="wrapper">
          <NavBar />
          <section className="content">
            <Switch>
              <Route path="/profile" render={() => <ProfileContainer />} />

              <Route path="/dialogs" render={() => <DialogsContainer />} />

              <Route path="/news" render={() => <News />} />

              <Route path="/music" render={() => <Music />} />

              <Route path="/users" render={() => <UsersContainer />} />

              <Route path="/settings" render={() => <Settings />} />
            </Switch>
          </section>
        </section>
      </section>
    </BrowserRouter>
  );
};

export default App;
