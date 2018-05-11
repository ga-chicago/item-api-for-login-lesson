import React, { Component } from 'react';
import './style.css';

export default class EditModal extends Component {
  constructor() { 
    super();
    console.log("constructor for EditModal called")
    console.log("with props: ", this.props)

    this.state = {
      itemVal: ''
    }
    // this.state = {
    //   itemVal: this.props.editingItem.title
    // }
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps, "nextProps in EditModal CWRP")
    // console.log(nextProps.editingItem.title, "nextProps.editingItem.title in EditModal CWRP")
    // component will receivep rops helps us get around the 
    // issue that constructor will only be called once
    // set the state before render is called
    // set state of what input val is at that moment
    this.setState({
      itemVal: nextProps.editingItem.title
    })
  }
  handleInput = (e) => {
    this.setState({ itemVal: e.currentTarget.value })
  }
  handleClick = () => {
    this.props.editItem(this.state.itemVal, this.props.editingItem.id);
  }
  render() {
    console.log(this.props)
    const cssClass = this.props.modalIsOpen ? 'Edit-Modal-Open' : 'Edit-Modal-Closed';
    return(
      <div className={cssClass}>
        <input type="text" value={this.state.itemVal} onChange={this.handleInput} />
        <button onClick={this.handleClick}>Update</button>
      </div>
    )
  }
};