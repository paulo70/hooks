import React,{ createContext, useState } from 'react'
import { initialState } from './data.js'

export const GlobalContext = createContext()

const AppContext = ({children}) => {

  const [ state, setState ] = useState(initialState)

  return (
    <GlobalContext.Provider value = {{state, setState}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default AppContext