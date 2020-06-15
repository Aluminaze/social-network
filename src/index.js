import * as serviceWorker from './serviceWorker'
import store from './redux/redux-store'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

let rerenderEntireThree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

rerenderEntireThree(store.getState())

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireThree(state);
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
