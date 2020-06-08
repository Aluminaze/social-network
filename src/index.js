import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let rerenderEntireThree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        store={store}
        state={store.getState()}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        sentMessage={store.sentMessage.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

rerenderEntireThree()

store.subscribe(rerenderEntireThree)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

