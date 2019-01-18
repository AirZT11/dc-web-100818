import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {cats: ""}
  }
  getCats = () => {
    fetch("http://localhost:3001/api/cats")
    .then(r => r.json())
    .then(d => this.setState({cats: d.message}))
  }

  componentDidMount(){
    this.getCats()
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.cats}</h1>
      </div>
    );
  }
}

export default App;
