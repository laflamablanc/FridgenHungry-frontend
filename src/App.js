import logo from './logo.svg';
import './App.css';
import React from 'react'
import Home from './Containers/Home'
import Login from './Components/Login'
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

class App extends React.Component {
  state = {
    isLoggedIn :false
  }

  loggedIn = () => {
    this.setState({isLoggedIn :true})
  }

  render(){
    console.log(this.state)
    return (
      <div>
        <Router>
          <Route exact path="/">
            {this.state.isLoggedIn ? <Redirect to="/home" /> : <Login loggedIn = {this.loggedIn}/> }
          </Route>
          <Route exact path="/home" render={() => <Home/>} />
        </Router>
      </div>
    )
  }
}



export default App;
