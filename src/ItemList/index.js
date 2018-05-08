import React, { Component } from 'react';

const ItemList = ({items, deleteItem, openModal}) => {

  const itemList = items.map((item, i) => {
    return (
      <li key={i}>
        {item.title}
        <button id={item.id} onClick={deleteItem}>Delete</button>
        <button onClick={openModal}>Edit</button>
      </li>
    )
  })
  return <ul>{itemList}</ul>
}

export default ItemList;