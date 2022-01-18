import React, { Component } from 'react';
import Grilla from './components/grilla';

class App extends Component {
  render(){
    return(
      <Grilla 
      n={10}
      m={10}/>
    )
  }
}
export default App;