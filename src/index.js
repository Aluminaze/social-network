import * as serviceWorker from './serviceWorker';
import state, {subcribe} from './redux/state';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, updateNewPostText, sentMessage, updateNewMessageText } from './redux/state'

let rerenderEntireThree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        receivedData={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        sentMessage={sentMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

rerenderEntireThree(state);

subcribe(rerenderEntireThree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

