import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import bienvenidoComponent from './bienvenidoComponent.js';

class App extends Component {
  render(){
    return (
      <Fragment>
           <div className="App">
           <bienvenidoComponent/>
           <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             
             <p>
               Editasdasd <code>src/App.js</code> and save to reload.
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
      </Fragment> 
  
  
  );
  }
}

export default App;
