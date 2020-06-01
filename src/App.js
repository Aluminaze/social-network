import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Profile from './components/Profile';

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
