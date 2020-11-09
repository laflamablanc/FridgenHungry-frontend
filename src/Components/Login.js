import React from 'react'

class Login extends React.Component {

  state = {
    username: [],
    password: []
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.loggedIn(this.state.username, this.state.password)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <div>
        <h2> WELCOME TO FRIDGEnHUNGRY! Please Login in to Continue </h2>
        <form onSubmit = {this.submitHandler}>
            <label for="username">Username:</label><br/>
            <input type="text" id="username" name="username" onChange = {this.handleChange} value={this.state.username}/><br/>
            <label for="password">Password:</label><br/>
            <input type="password" id="password" name="password" onChange = {this.handleChange} value = {this.state.password}/>
            <input type="submit" id="submit" name="submit"/>
        </form>
      </div>
    )
  }
}



export default Login
