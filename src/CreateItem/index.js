import React, { Component } from 'react';

class CreateItem extends Component {
  constructor() {
    super();

    this.state = {
      title: ''
    }
  }

  updateItem = (e) => {
    this.setState({
      title: e.currentTarget.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.title)    
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" value={this.state.title} placehoder="enter new item here" onChange={this.updateItem} />
        <input type="submit" />
      </form>
    )
  }
}

export default CreateItem