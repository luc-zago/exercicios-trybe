// import logo from './logo.svg';
// import { render } from '@testing-library/react';
import './App.css';
// import MyName from './Component.js';
import React, { Component } from 'react'

const Task = (props) => {
  return (
    <li>{props.name}</li>
  );
}

class App extends Component {
  render() {

    const tasks = ['Start-stop', 'Zazen', 'Alongamento', 'Exercícios'];

    return tasks.map(item => <Task name={item}/>)
  }
}

/* function App() {
  return <Task name='Lucas'/>
   // <task />
  /*  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
