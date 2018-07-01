import React from 'react';

const List = props => (
  <ul>
    {
      props.items.map((item, index) => <li key={index}>{item} <button type="button" className="close" onClick={this.onClickClose}>X</button></li>)
    }
  </ul>
);

export default List;
