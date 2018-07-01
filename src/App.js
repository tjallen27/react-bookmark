import React, { Component } from 'react';
import ListItems from './Components/ListItems';
import './App.css';
const appStyles = {
  fontWeight: '300',
  color: '#333'
}
const headerStyles = {
  marginTop: '0',
  color: 'white',
  background: 'rgba(100, 100, 245, 1)'
};
const h1Styles = {
  marginTop: '0',
  padding: '20px 0'
}
const formStyles = {
  margin: '10px',
  padding: '10px',
  outline: 'none',
  border: 'none',
  borderRadius: '5px'
}


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
    console.log('remove item')
    var items = this.state.items;
    items.splice(index, 1)
    this.setState({items})
  }

  render() {
    return (
      <div style={appStyles} className="App">
        <header style={headerStyles} className="App-header">
          <h1 style={h1Styles} className="App-title">Feast It: Bookmark List</h1>
        </header>

        <form style={formStyles} onSubmit={this.onSubmit}>
          <span>https:// </span><input  value={this.state.value} onChange={this.onChange} />
          <button style={formStyles}>Save</button>
        </form>

        <ListItems items={this.state.items} url={this.state.url} removeItem={this.removeItem}/>
      </div>
    );
  }
}
