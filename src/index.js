import * as serviceWorker from './serviceWorker'
import store from './redux/redux-store'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Store from './storeContext'

let rerenderEntireThree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Store.Provider value={store}>
        <App />
      </Store.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

rerenderEntireThree()

store.subscribe(() => {
  rerenderEntireThree();
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
