import React, { Component } from 'react';
import Selection from './components/selection/selection'
import Header from './components/header/header'
import tool from './tool';
import './App.css';


class App extends Component {

  constructor(){
    super();
    this.state = {
        inputSelect: '',
    }
  }

  onSelection = (e) =>{
    this.setState({inputSelect: e.target.value})
  }

  render() {
    this.show = tool[this.state.inputSelect]
    return (
      <div>
        <Header />
        <Selection  select={this.onSelection}/>
        {this.show}
      </div>
    );
  }
}

export default App;
