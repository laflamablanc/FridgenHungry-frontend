import React from 'react'
import Ingredient from '../Components/Ingredient'

class IngredientsContainer extends React.Component {

  state = {
    ingredients: []
  }

  renderIngredients = () => {
    console.log("hey")
    this.state.ingredients.map(ingredient => {
      return <Ingredient
      key = {ingredient.id}
      ingredient = {ingredient}
      />
    })
  }

  render(){
    let arrayOfIngredients = this.renderIngredients()
    console.log("State", this.state.ingredients)
    return(
      <div>{arrayOfIngredients}</div>
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
