import React from 'react';
import './style/css/App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className="container">
      <Header />

      <section className="wrapper">
        <NavBar />
        <Profile />
      </section>
    </div>
  );
}

export default App;
