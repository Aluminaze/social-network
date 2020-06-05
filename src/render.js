import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, updateNewPostText, sentMessage, updateNewMessageText } from './redux/state'


export let rerenderEntireThree = (state) => {
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