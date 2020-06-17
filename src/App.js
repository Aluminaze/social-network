import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './style/css/App.css'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

const App = (props) => {
  return (
    <BrowserRouter>
      <section className="container">
        <Header />
        <section className="wrapper">
          <NavBar />
          <section className="content">
            <Switch>
              <Route path="/profile"
                render={() => <Profile
                  store={props.store}
                  postsData={props.state.profilePage.posts}
                  newPostText={props.state.profilePage.newPostText}
                  dispatch={props.dispatch}
                />}
              />

              <Route path="/dialogs"
                render={() => <Dialogs
                  dialogsData={props.state.dialogsPage.dialogs}
                  messagesData={props.state.dialogsPage.messages}
                  newMessageText={props.state.dialogsPage.newMessageText}       
                  dispatch={props.dispatch}
                />}
              />

              <Route path="/news"
                render={() => <News />} />

              <Route path="/music"
                render={() => <Music />} />

              <Route path="/settings"
                render={() => <Settings />} />
            </Switch>
          </section>
        </section>
      </section>
    </BrowserRouter>
  );
}

export default App
