import React from 'react'

class Login extends React.Component {
  state = {
    isLoggedIn :false
  }
  loggedIn = () => {
    this.setState({isLoggedIn :true})
  }
  render(){ 
    return(
      <div> 
        <h2> WELCOME TO FRIDGEnHUNGRY! Please Login in to Continue </h2>
        <form onSubmit = {this.loggedIn}>
            <label for="Username">Username:</label><br/>
            <input type="text" id="Username" name="Username"/><br/>
            <label for="Password">Password:</label><br/>
            <input type="text" id="Password" name="Password"/>
            <input type="submit" id="submit" name="Submit"/>
        </form>
      </div>
    )
  }
}

export default Login
