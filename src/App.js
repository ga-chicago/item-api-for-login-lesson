import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

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
      })
      .catch((err) => {
        console.error(err)
      })

    this.createItem()
      .then((response) => {
        console.log(response)
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
  createItem = async () => {
    const unparsedResponse = await fetch('http://localhost:9292/items', {
      method: 'POST',
      body: JSON.stringify({
        title: "e . t . h . e . r . e . u . m"
      })
    });
    const parsedResponsePromise = await unparsedResponse.json();
    return parsedResponsePromise;
  }
  render() {
    return (
      <div className="App">
        See Console
      </div>
    );
  }
}

export default App;
