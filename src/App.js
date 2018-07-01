import React, { Component } from 'react';
import ListItems from './Components/ListItems';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      url: '',
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
      this.setState({
        value: '',
        url: ''
      });
    } else if (!this.state.value.startsWith("www")){
      alert('Please start the URL with \'www.\'');
      this.setState({
        value: '',
        url: ''
      });
    } else {
      this.setState({
        value: '',
        url: 'https://' + this.state.value,
        items: [...this.state.items, this.state.value]
      });
    }
  }

  removeItem(index) {
    console.log(index)
    var items = this.state.items;
    items.splice(index, 1)
    this.setState({items})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feast It: Bookmark List</h1>
        </header>

        <form onSubmit={this.onSubmit}>
          <span>https://</span><input value={this.state.value} onChange={this.onChange} />
          <button>Save</button>
        </form>
        <ListItems items={this.state.items} url={this.state.url} removeItem={this.removeItem}/>
      </div>
    );
  }
}
