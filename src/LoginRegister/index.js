import React, { Component } from 'react';
import './style.css'

class LoginRegister extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      registering: false
    }

  }

  handleInput = (e) => {
    const whichField = e.currentTarget.name
    if(whichField === "username") this.setState({ username: e.currentTarget.value })
    else this.setState({ password: e.currentTarget.value })
  }

  handleSubmit = (e) => { console.log("handleSubmit in LoginRegister")
    e.preventDefault();
    if(this.state.registering) this.props.doRegister(this.state.username, this.state.password)
    else this.props.doLogin(this.state.username, this.state.password)
  }

  registration = () => {
    this.setState({
      registering: true
    })
  }
  loggingIn = () => {
    this.setState({
      registering: false
    })
  }

  render() {
    return(
      <div>
        <p><span className={this.state.registering ? "current" : null} onClick={this.registration}>Register</span> • <span className={this.state.registering ? null : "current"} onClick={this.loggingIn}>Login</span></p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder={this.state.registering ? "desired username" : "username"} onChange={this.handleInput} /><br />
          <input type="password" name="password" placeholder="password" onChange={this.handleInput} /><br />
          <input type="submit" />
        </form>
      </div>
    )
  }

}

export default LoginRegister