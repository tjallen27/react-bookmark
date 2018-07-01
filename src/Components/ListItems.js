import React from 'react';

const List = props => (
  <ul>
    {
      props.items.map((item, index) => <li key={index}><a href={props.url} target="_blank">{item}</a> <button type="button" className="close" onClick={props.removeItem}>X</button></li>)
    }
  </ul>
);

export default List;
