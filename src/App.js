import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style/css/App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <section className="wrapper">
          <NavBar />
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/dialogs">
              <Dialogs />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/music">
              <Music />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
