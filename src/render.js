import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updateNewPostText} from './redux/state';


export let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App receivedData={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
}