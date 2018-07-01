import React from 'react';

const List = props => (
  <ul>
    {
      props.items.map((item, index) => <li key={index}><a href={props.url}>{item}</a> <button type="button" className="close" onClick={this.removeItem}>X</button></li>)
    }
  </ul>
);

export default List;
