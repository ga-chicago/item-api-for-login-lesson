import React, { Component } from 'react';


class LoginRegister extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }

  }

  handleInput = (e) => {
    const whichField = e.currentTarget.name
    if(whichField === "username") this.setState({ username: e.currentTarget.value })
    else this.setState({ password: e.currentTarget.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.doRegister(this.state.username, this.state.password)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" placeholder="username" onChange={this.handleInput} />
        <input type="password" name="password" placeholder="password" onChange={this.handleInput} />
        <input type="submit" />
      </form>
    )
  }

}

export default LoginRegister