import React, { Component } from 'react';
import Selection from './components/selection/selection'
import Gradient from './components/gradient/gradient';
import Table from './components/table/table';
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
    if(this.state.inputSelect === 'gradient'){
      this.show = <Gradient />
    }else if(this.state.inputSelect === 'table'){
      this.show = <Table />
    }else{
      this.show = <p></p>
      }
    return (
      <div>
        <Selection  select={this.onSelection}/>
        {this.show}
      </div>
    );
  }
}

export default App;
