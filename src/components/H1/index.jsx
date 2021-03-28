import React,{ useContext } from 'react'

import { GlobalContext } from '../../context/AppContext'

const H1 = ({text}) => {
  const context = useContext(GlobalContext)
  const { state: {title, counter}, } =  context

  return (
    <h1>{title} {counter}</h1>
  )
}

export default H1