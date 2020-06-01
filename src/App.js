import React from 'react';
import './style/css/App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
