import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let data = {
  posts: [
    { id: 0, message: "I'm create this application with React technology!", likes: 23 },
    { id: 0, message: "It's my second post on my page :)", likes: 12 },
    { id: 0, message: "It's my first post on my page. WoW!!!", likes: 5 },
    { id: 0, message: "Hi!", likes: 1 }
  ],
  messages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "Whatsaaaaaaap?" }
  ],
  dialogs: [
    { id: 1, name: "Alexa" },
    { id: 2, name: "Thomas" },
    { id: 3, name: "Jessi" },
    { id: 4, name: "Brad" },
    { id: 5, name: "Angel" },
    { id: 6, name: "Bessy" },
    { id: 7, name: "Vegas" }    
  ]
}

ReactDOM.render(
  <React.StrictMode>
    <App receivedData={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

