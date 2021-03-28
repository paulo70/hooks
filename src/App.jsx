import React, { useState, createContext, useContext} from 'react';
import logo from './logo.svg';
import './App.css';

import AppContext  from './context/AppContext'
import Div from './components/Div'

function App() {

  return (
    <AppContext>
      <Div/>
    </AppContext>
  );
}

export default App;
