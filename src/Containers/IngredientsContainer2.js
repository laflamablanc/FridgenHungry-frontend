import React from 'react'
import Ingredient from '../Components/Ingredient'
import { Grid } from '@material-ui/core';


class IngredientsContainer extends React.Component {

  state = {
    ingredients: []
  }

  renderIngredients = () => {
    return this.state.ingredients.map(ingredient => {
      return <Ingredient
        key = {ingredient.id}
        ingredient = {ingredient}
        ingredientClickHandler = {this.props.ingredientClickHandler}
        />
    })
  }

  render(){
    return(
      <div className = "ingredients-container">
        <Grid container spacing = {3}>
          {this.renderIngredients()}
        </Grid>
      </div>
    )
  }

  componentDidMount(){
    fetch('http://localhost:4000/ingredients/')
    .then(r=>r.json())
    .then((ingredientsArray) => {
      this.setState({
        ingredients: ingredientsArray
      })
    })
  }

}


export default IngredientsContainer
