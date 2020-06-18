import React from 'react'

const Store = React.createContext(null)

export const Provider = (props) => {
  return (
    <Store.Provider value={props.store}>
    {props.children}
    </Store.Provider>
  )
}

export default Store
