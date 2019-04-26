import React, { Component, Fragment } from 'react';
import BienvenidoComponent from './bienvenidoComponent.js';
import IntroduccionComponent from './IntroduccionComponent.js';
import IngredientesComponent from './IngredientesComponent.js';
import './App.css';




class App extends Component {
  constructor(){
    super();

    this.state = {
      activePage: 'Bienvenido'
    }

    this.changeSection = this.changeSection.bind(this);
  }

  changeSection(newPage) {
    this.setState({
      activePage: newPage
    })
  }



  render(){
    return (
      <Fragment>
        
           <div className="App">
            { this.state.activePage === 'Bienvenido' ? 
              <BienvenidoComponent clickHandler={this.changeSection}/> : null}

            { this.state.activePage === 'Introduccion' ? 
            <IntroduccionComponent/> : null }

            { this.state.activePage === 'ingredientes' ? <IngredientesComponent/>: null }
          
         </div>
      </Fragment> 
  
  
  );
  }
}

export default App;
