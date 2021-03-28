import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  const [reverse, setReverse] = useState(false);
  const removeClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
  };

  const handleIncrement = () => {
    setCounter((counter) => counter + 1)
  }

  // componentDidUpdate execute everytime update component
  useEffect(() => {
    console.log('componentDidupdate')
  })

  // componentDidMount execute just one time
  useEffect(() => {
    console.log('componentDidMount')

  },[])

  // with dependencie - execute every time that dependencie change
  useEffect(() => {
    console.log('componentDidMount', counter)
  },[counter])
  return (
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className={`App-logo ${removeClass}`} alt="logo"/>
        <h1>Counter {counter}</h1>
        <p>
          <button className="App-link" onClick={handleClick}>
          Learn React{reverse}
          </button>
        </p>
         <p>
          <button className="App-link" onClick={handleIncrement}>
            Increment
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
