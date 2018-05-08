import React, { Component } from 'react';

const ItemList = ({items, deleteItem}) => {
  const itemList = items.map((item, i) => {
    return (
      <li key={i}>
        {item.title}
        <button id={item.id} onClick={deleteItem}>Delete</button>
      </li>
    )
  })
  return <ul>{itemList}</ul>
}

export default ItemList;