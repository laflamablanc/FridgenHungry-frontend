import React from 'react'
import IngredientsContainer from '../Containers/IngredientsContainer'
import Cart from './Cart'
import Grid from '@material-ui/core/Grid'
import Nutrition from '../Components/Nutrition'
import { useDrag, useDrop } from "react-dnd";

class GroceryStore extends React.Component {

  state = {
    fridgeIngredients: this.props.fridge.ingredients? this.props.fridge.ingredients : [],
    join: []
  }

  ingredientClickHandler = (ingredientObj) => {
      let options = {
        method: "POST" ,
        headers:{
          "content-type" : "application/json",
          "accept" : "application/json"
        },
        body: JSON.stringify(
          {
            fridge_id: this.props.fridgeId,
            ingredient_id: ingredientObj.id
          }
        )
      }

      fetch('http://localhost:4000/fridge_ingredients', options)
      .then(response => response.json())
      .then(data => {
        this.setState({
          fridgeIngredients: [...this.state.fridgeIngredients, ingredientObj],
          join: [...this.state.join, data]
        })
      })
      // this.props.addFridgeIngredient(ingredientObj) this was breaking our code
    }

  removeIngredient = (ingredientObj) => {
    let deletedItem = this.state.join.find(x => x.ingredient_id === ingredientObj.id)
    let newFridge = this.state.fridgeIngredients.filter(ingredient => ingredient.id !== ingredientObj.id)
    this.setState({
      fridgeIngredients: newFridge
    })
    let options = {
      method: "DELETE" ,
      headers:{
        "content-type" : "application/json",
        "accept" : "application/json"
      }
    }

    fetch('http://localhost:4000/fridge_ingredients/'+deletedItem.id, options)
    .then(response => response.json())
    .then(data => {console.log("DELETED ITEM", data)
    //   this.setState({
    //     fridgeIngredients: [...this.state.fridgeIngredients, ingredientObj]
    //   })
    })
  }

  render(){
    console.log("Fridge Ingredients", this.state.fridgeIngredients)
    return(
      <div>
        <Grid item xs = {12} container spacing = {2}>
          <Grid item xs = {6}>
            <IngredientsContainer ingredientClickHandler = {this.ingredientClickHandler} />
          </Grid>
          <Grid item xs = {6}>
            <Cart foodArray={this.state.fridgeIngredients} removeIngredient = {this.removeIngredient}/>
          </Grid>
        </Grid>
        <Nutrition foodArray={this.state.fridgeIngredients}/>
      </div>
    )
  }
}

export default GroceryStore
