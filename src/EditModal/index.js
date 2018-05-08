import React, { Component } from 'react';
import './style.css';

export default class EditModal extends Component {
  render() {
    const cssClass = this.props.modalIsOpen ? 'Edit-Modal-Open' : 'Edit-Modal-Closed';
    return(
      <div className={cssClass}>
        <input type="text" />
        <button>Update</button>
      </div>
    )
  }
};