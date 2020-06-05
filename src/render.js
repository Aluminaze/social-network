import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost} from './redux/state';


export let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App receivedData={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
}