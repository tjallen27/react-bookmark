import React, {Component} from 'react';

export default class ListItems extends Component {
  render(props){
    return (
      <ul>
        {
          props.items.map((item, key) => <li key={key}>{item}</li>)
        }
      </ul>
    )
  }
}
