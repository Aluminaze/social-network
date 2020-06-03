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

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <section className="wrapper">
          <NavBar />
          <Switch>
            <Route path="/profile"
              render={() => <Profile
                postsData={props.receivedData.posts} />}
            />

            <Route path="/dialogs"
              render={() => <Dialogs
                dialogsData={props.receivedData.dialogs}
                messagesData={props.receivedData.messages} />}
            />

            <Route path="/news"
              render={() => <News />} />
              
            <Route path="/music"
              render={() => <Music />} />
              
            <Route path="/settings"
              render={() => <Settings />} />
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
