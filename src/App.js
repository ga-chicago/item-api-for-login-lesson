import React, { Component } from 'react';
import logo from './logo.svg';
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
      .then((data) => {
        console.log(data)
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
  render() {
    return (
      <div className="App">
        See Console
      </div>
    );
  }
}

export default App;
