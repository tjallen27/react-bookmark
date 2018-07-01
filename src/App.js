import React, { Component } from 'react';
import ListItems from './Components/ListItems';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({value: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <form onSubmit={this.onSubmit}>
          <input value={this.state.value} onChange={this.onChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
