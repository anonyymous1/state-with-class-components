import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state ={
      count: 0,
      inputtedNumber: 0
    }
    // this.increment = this.increment.bind(this)
  }
  
  increment = () => {
    const newCount = this.state.count + this.state.inputtedNumber
    this.setState({count: newCount})
      // let currentCount = this.state.count
      // let newCount = currentCount + 1
      // this.setState({count: newCount})
  }

  decrement = () => {
    const newCount = this.state.count - this.state.inputtedNumber
    this.setState({count: newCount})
    // let currentCount = this.state.count
    // let newCount = currentCount - 1
    // this.setState({count: newCount})
  }

  changeInput = (evt) => {
    console.log(evt.target.value);
    const newValue = parseInt(evt.target.value) || 0

    this.setState({inputtedNumber:newValue})
  }

  render() {
    return(
      <div>
        <h1>{ this.state.count }</h1>
        <input type="number" value={this.state.inputtedNumber} onChange={this.changeInput}/>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}


export default App;
