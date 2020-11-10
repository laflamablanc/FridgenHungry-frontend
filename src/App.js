import logo from './logo.svg';
import './App.css';
import React from 'react'
import ShoppingCart from './Containers/ShoppingCart'
import Login from './Components/Login'
import RecipesContainer from './Containers/RecipesContainer'
import Fridge from './Containers/Fridge'
import NavBar from './Components/NavBar'

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
          <NavBar/>
          <Route exact path="/">
            {this.state.isLoggedIn ? <Redirect to='/cart'/> : <Login loggedIn = {this.loggedIn}/> }
          </Route>
          <Route exact path="/cart" render={() => <ShoppingCart fridgeId = {this.state.fridgeId}/>} />
          <Route exact path="/recipes" render={() => <RecipesContainer/>}/>
          <Route exact path="/fridge" render={() => <Fridge/>}/>
        </Router>
      </div>
    )
  }
}



export default App;
