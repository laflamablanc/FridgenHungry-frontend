import logo from './logo.svg';
import './App.css';
import React from 'react'
import Home from './Containers/Home'
import Login from './Components/Login'
import RecipesContainer from './Containers/RecipesContainer'
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

class App extends React.Component {
  state = {
    isLoggedIn :false,
    fridgeId: null
  }

  loggedIn = (username, password) => {
    let fridgeOptions = {
      method: "POST" ,
      headers:{
        "content-type" : "application/json",
        "accept" : "application/json"
      },
      body: JSON.stringify(
        {
          username: username,
          password: password
        }
      )
    }

    fetch('http://localhost:4000/fridges', fridgeOptions)
    .then(response => response.json())
    .then(data => {
      this.setState({
        isLoggedIn :true,
        fridgeId: data.id
        })
    })
  }


  render(){
    console.log(this.state)
    return (
      <div>
        <Router>
          <Route exact path="/">
            {this.state.isLoggedIn ? <Redirect to='/home'/> : <Login loggedIn = {this.loggedIn}/> }
          </Route>
          <Route exact path="/home" render={() => <Home fridgeId = {this.state.fridgeId}/>} />
          <Route exact path="/recipes" render={() => <RecipesContainer/>}/>
        </Router>
      </div>
    )
  }
}



export default App;
