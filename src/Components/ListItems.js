import React from 'react';

// Styles
const formStyles = {
  padding: '10px',
  outline: 'none',
  border: 'solid 1px #555',
  borderRadius: '5px'
}
const listStyles = {
  listStyle: 'none'
}
const buttonStyles = {
  margin: '10px',
  padding: '5px 15px',
  outline: 'none',
  color: 'white',
  background: 'rgba(100, 100, 245, 1)',
  borderRadius: '5px'
}

const List = props => (
  <ul>
    {
      // map through items...
      props.items.map((item, index) =>
      <li
      // set the unqiue key for each item in the array
      key={index}
      style={listStyles}
      >
        <a href={props.url} target="_blank">{item}</a>
        <button style={buttonStyles} type="button" className="close" onClick={props.removeItem}>x</button>
      </li>)
    }
  </ul>
);

export default List;
