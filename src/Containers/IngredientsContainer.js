import React from 'react'
import Ingredient from '../Components/Ingredient'

class IngredientsContainer extends React.Component {

  state = {
    ingredients: []
  }

  renderIngredients = () => {
    return this.state.ingredients.map(ingredient => {
      return <Ingredient
        key = {ingredient.id}
        ingredient = {ingredient}
        ingedientClickHandler = {this.props.ingredientClickHandler}
        />
    })
  }

  render(){
    return(
      <div>{this.renderIngredients()}</div>
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
