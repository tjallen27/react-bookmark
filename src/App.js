import React, { Component } from 'react';
import ListItems from './Components/ListItems';
import SimpleReactValidator from 'simple-react-validator';
// Styling
const appStyles = {
  fontWeight: '300',
  color: '#333'
}
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
  }

  componentWillMount() {
    this.validator = new SimpleReactValidator();
  }

  onChange = (e) => {
    // onChange method to set state value to target value
    this.setState({value: e.target.value});
  }

  onSubmit = (event) => {
    // Prevent page reload
    event.preventDefault()
    // if(this.validator.url.allValid()){
    this.setState({
      value: '',
      url: 'https://' + this.state.value,
      items: [...this.state.items, this.state.value]
    });
  // }
  }

  removeItem(index) {
    console.log('remove item')
    // variable storing current state items
    var items = this.state.items;
    // remove current item
    items.splice(index, 1)
    // reset state to current item array
    this.setState({items})
  }

  render() {
    return (
      <div style={appStyles} className="App">

        <header style={headerStyles} className="App-header">
          <h1 style={h1Styles} className="App-title">Feast It: Bookmark List</h1>
        </header>

        <form style={formStyles} onSubmit={this.onSubmit}>
          <label>Url:</label><br />
          <span>https:// </span>
          <input  value={this.state.value} onChange={this.onChange} />
          <button style={buttonStyles}>Save</button>
        </form>

        <ListItems items={this.state.items} url={this.state.url} removeItem={this.removeItem}/>
        
      </div>
    );
  }
}
