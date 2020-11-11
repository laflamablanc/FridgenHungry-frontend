import './App.css';
import React from 'react'
import GroceryStore from './Containers/GroceryStore'
import Login from './Components/Login'
import RecipesContainer from './Containers/RecipesContainer'
import Fridge from './Containers/Fridge'
import NavBar from './Components/NavBar'

import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

class App extends React.Component {
  state = {
    isLoggedIn :false,
    fridge: {}
  }

  addFridgeIngredient = (ingredientObj) => {
    this.setState({
      fridge: {
        ingredients: [...this.state.fridge.ingredients, ingredientObj]
      }
    })
  }

  removeFridgeIngredient = (ingredientObj) => {
    let filteredArray = this.state.fridge.ingredients.filter(ingredient => ingredient.id !== ingredientObj.id)
    console.log("Filtered Array", filteredArray)
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
    .then(fridgeObj => {
      this.setState({
        isLoggedIn :true,
        fridge: fridgeObj
        })
    })
  }


  render(){
    return (
      <div>
        <Router>
          <NavBar/>
          <Route exact path="/">
            {this.state.isLoggedIn ? <Redirect to='/cart'/> : <Login loggedIn = {this.loggedIn}/> }
          </Route>
          <Route exact path="/cart" render={() => <GroceryStore fridgeId = {this.state.fridge.id} fridge={this.state.fridge} addFridgeIngredient={this.addFridgeIngredient} removeFridgeIngredient={this.removeFridgeIngredient}/>} />
          <Route exact path="/recipes" render={() => <RecipesContainer fridge = {this.state.fridge}/>}/>
          <Route exact path="/fridge" render={() => <Fridge fridge = {this.state.fridge}/>}/>
        </Router>
      </div>
    )
  }
}



export default App;
