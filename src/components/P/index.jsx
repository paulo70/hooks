import React, { useContext } from 'react'
import { GlobalContext } from '../../context/AppContext'

const P = () => {
  const context = useContext(GlobalContext)
  const { state: { body, counter }, setState } = context
  return (
    <p onClick={() => setState((s) => ({...s, counter: s.counter + 1}))}>
      { body } { counter }
    </p>
  )
}

export default P