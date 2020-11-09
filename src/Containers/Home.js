import React from 'react'
import IngredientsContainer from '../Containers/IngredientsContainer'
import Fridge from './Fridge'
import Grid from '@material-ui/core/Grid'
import Nutrition from '../Components/Nutrition'

class Home extends React.Component {

  state = {
    fridge: [],
    fridgeId: this.props.fridgeId
  }

  ingredientClickHandler = (ingredientObj) => {
    console.log("Ingredient Id", ingredientObj.id, "Fridge Id", this.state.fridgeId)
      let options = {
        method: "POST" ,
        headers:{
          "content-type" : "application/json",
          "accept" : "application/json"
        },
        body: JSON.stringify(
          {
            fridge_id: this.state.fridgeId,
            ingredient_id: ingredientObj.id
          }
        )
      }

      fetch('http://localhost:4000/fridge_ingredients', options)
      .then(response => response.json())
      .then(data => {
        this.setState({
          fridge: [...this.state.fridge, ingredientObj]
        })
      })

    }





  removeIngredient = (ingredientObj) => {
    let newFridge = this.state.fridge.filter(ingredient => ingredient.id !== ingredientObj.id)
    this.setState({
      fridge: newFridge
    })
  }


  render(){
    return(
      <div>
        <Grid item xs = {12} container spacing = {2}>
          <Grid item xs = {6}>
            <IngredientsContainer ingredientClickHandler = {this.ingredientClickHandler}/>
          </Grid>
          <Grid item xs = {6}>
            <Fridge foodArray={this.state.fridge} removeIngredient = {this.removeIngredient}/>
          </Grid>
        </Grid>
        <Nutrition foodArray={this.state.fridge}/>
      </div>
    )
  }
}

export default Home
