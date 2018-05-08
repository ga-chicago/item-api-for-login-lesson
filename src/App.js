import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ItemList from './ItemList';
import CreateItem from './CreateItem';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: []
    }
  }
  componentDidMount = () => {
    this.getItems()
      .then((response) => {
        console.log(response)
        this.setState({
          items: response.retrieved_items
        })
      })
      .catch((err) => {
        console.error(err)
      })

  }
  getItems = async () => {
    const itemsJson = await fetch('http://localhost:9292/items');
    const items = await itemsJson.json();
    return items;
  }
  addItem = async (itemTitle) => {
    console.log(itemTitle)
    const items = await fetch('http://localhost:9292/items', {
      method: 'POST',
      body: JSON.stringify({
        title: itemTitle
      })
    });
    const itemsParsed = await items.json();
    this.setState({
      items: [...this.state.items, itemsParsed.added_item]
    })
    return itemsParsed;
  }
  deleteItem = async (e) => { 
    e.preventDefault();
    console.log(e.currentTarget)
    const id = e.currentTarget.id 
    console.log(id)    
    const item = await fetch('http://localhost:9292/items/' + id, {
      method: 'DELETE'
    })

    const response = await item.json();

    this.setState({
      items: this.state.items.filter(item => item.id !== parseInt(id, 10))
    })
    // you could also just getItems again but this means you don't 
    // need to make another request

  }
  render() {
    return (
      <div className="App">
        <ItemList items={this.state.items} deleteItem={this.deleteItem} />
        <CreateItem addItem={this.addItem} />
      </div>
    )
  }
}

export default App;
