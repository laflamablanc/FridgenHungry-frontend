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
      <div className="login-page">
        <h2 className="login-page-header-text login-page-header-text-lg"> Welcome to Fridg'n Hungry! </h2>
        <h5 className="login-page-header-text login-page-header-text-sm"> Please Login to Continue </h5>
        <form className="login-page-form" onSubmit = {this.submitHandler}>
            <label className="login-page-header-text" for="username">Username:</label><br/>
            <input type="text" id="username" name="username" onChange = {this.handleChange} value={this.state.username}/><br/>
            <label className="login-page-header-text" for="password">Password:</label><br/>
            <input type="password" id="password" name="password" onChange = {this.handleChange} value = {this.state.password}/><br/>
            <input className="login-page-submit" type="submit" id="submit" name="submit"/>
        </form>
      </div>
    )
  }
}



export default Login
