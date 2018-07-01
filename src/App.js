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

  onChange = (e) => {
    this.setState({value: e.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault()
    if(!this.state.value){
      alert('Please enter a value');
    } else if (!this.state.value.startsWith("https") && (!this.state.value.startsWith("http"))){
      alert('Please start the URL with \'http or https\'');
    } else {
      this.setState({
        value: '',
        items: [...this.state.items, this.state.value]
      });
    }
  }

  removeItem() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
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
          <span>https://</span><input value={this.state.value} onChange={this.onChange} />
          <button>Save</button>
        </form>
        <ListItems items={this.state.items} removeItem={this.removeItem}/>
      </div>
    );
  }
}
