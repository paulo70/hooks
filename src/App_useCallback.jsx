import React, { useState, useEffect, useCallback, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';

const Button = ({increment}) => {
  console.log('son')
  return <button className="App-link" onClick={() => increment(100)}>+</button>
}

function App() {
  const [counter, setCounter] = useState(0)

  const handleIncrement = useCallback((num) => {
    setCounter((counter) => counter + num)
  },[])

  console.log('father')

  return (
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className='App-logo' alt="logo"/>
        <h1>Counter {counter}</h1>
        { useMemo(() => {
           return  <Button increment = {handleIncrement} />
          },[handleIncrement]) 
        }
      </header>
    </div>
  );
}

export default App;
