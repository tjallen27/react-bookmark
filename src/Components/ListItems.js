import React from 'react';

const formStyles = {
  padding: '10px',
  outline: 'none',
  border: 'solid 1px #555',
  borderRadius: '5px'
}
const listStyles = {
  listStyle: 'none'
}

const List = props => (
  <ul>
    {
      props.items.map((item, index) =>
      <li
      key={index}
      style={listStyles}
      >
        <a href={props.url} target="_blank">{item}</a>
        <button style={formStyles} type="button" className="close" onClick={props.removeItem}>x</button>
      </li>)
    }
  </ul>
);

export default List;
