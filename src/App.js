import React, { Component } from 'react';
import ListItems from './Components/ListItems';
import ErrorBoundary from './Components/ErrorBoundary';
import SimpleReactValidator from 'simple-react-validator';
// Styling
const headerStyles = {
  marginTop: '0',
  paddingLeft: '10px',
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
const buttonStyles = {
  margin: '10px',
  padding: '10px',
  outline: 'none',
  border: 'none',
  borderRadius: '5px'
}


export default class App extends Component {
  constructor(props){
    super(props);
    // Set Initial state
    this.state = {
      value: '',
      url: '',
      items: []
    };
    this.removeItem = this.removeItem.bind(this);
  }

  componentWillMount() {
    this.validator = new SimpleReactValidator();
  }

  onChange = (event) => {
    // onChange method to set state value to target value
    this.setState({value: event.target.value});
  }

  onSubmit = (event) => {
    // Prevent page reload
    event.preventDefault()
    if (this.state.value)
    this.setState({
      value: '',
      url: 'https://' + this.state.value,
      items: [...this.state.items, this.state.value]
    });
  }

  removeItem = (index) => {
    console.log('remove item')
    // variable storing current state items
    const items = this.state.items;
    // remove current item
    items.splice(index, 1)
    // reset state to current item array
    this.setState({items})
  }

  componentWillMount(nextProps, nextState){
    localStorage.setItem("listItems", "something");
  }

  render() {
    return (
      <div className="App">
        <header style={headerStyles} className="App-header">
          <h1 style={h1Styles} className="App-title">Feast It: Bookmark List</h1>
        </header>

        <ErrorBoundary>
          <form style={formStyles} onSubmit={this.onSubmit}>
            <label>Url:</label>
            <span>https:// </span>
            <input  value={this.state.value} onChange={this.onChange} />
            <button style={buttonStyles}>Save</button>
          </form>
        </ErrorBoundary>

        <ListItems items={this.state.items} url={this.state.url} removeItem={this.removeItem} />
      </div>
    );
  }
}
