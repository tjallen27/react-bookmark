import React, { Component } from 'react';
import ListItems from './Components/ListItems';
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
      value: '',
      items: [...this.state.items, this.state.value]
    });
  }

  removeItem (itemIndex) {
   this.state.items.splice(itemIndex, 1);
   this.setState({items: this.state.items});
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feast It: Bookmark List</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <form onSubmit={this.onSubmit}>
          <input value={this.state.value} onChange={this.onChange} />
          <button>Save</button>
        </form>
        <ListItems items={this.state.items} removeItem={this.removeItem}/>
      </div>
    );
  }
}
