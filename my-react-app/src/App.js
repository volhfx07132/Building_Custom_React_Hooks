import logo from './logo.svg';
import './App.css';
import React from 'react';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';

function App() {
  return (
    <React.Fragment>
       <BackwardCounter/>
       <ForwardCounter/>
    </React.Fragment>
  );
}

export default App;
