import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ItemList from './ItemList';
import CreateItem from './CreateItem';
import EditModal from './EditModal';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      modalIsOpen: false,
      editingItem: ''
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

  openModal = (e) => {
    console.log("openModalCalled")
    const itemId = e.currentTarget.previousSibling.id
    console.log("itemId ", itemId)
    const itemWeAreEditing = this.state.items.find(item => item.id == itemId)
    console.log(itemWeAreEditing, " itemWeAreEditing")
    this.setState({
      modalIsOpen: true,
      editingItem: itemWeAreEditing
    })
  }
  editItem = async (titleValue, id) => {
    const item = await fetch('http://localhost:9292/items/' + id, {
      method: 'PATCH',
      body: JSON.stringify({ title: titleValue })
    })
    
    const response = await item.json();

    const editedItemIndex = this.state.items.findIndex(item=>item.id == response.updated_item.id)

    const state = this.state;
    state.items[editedItemIndex] = response.updated_item;
    state.modalIsOpen = false;
    this.setState(state);

  }
  render() {
    return (
      <div className="App">
        <ItemList items={this.state.items} deleteItem={this.deleteItem} openModal={this.openModal} />
        <CreateItem addItem={this.addItem} />
        <EditModal modalIsOpen={this.state.modalIsOpen} editingItem={this.state.editingItem} editItem={this.editItem} />
      </div>
    )
  }
}

export default App;
