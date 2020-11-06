import React from 'react'
import Ingredient from './Ingredient'

class Fridge extends React.Component {

  displayFood = () => {
    return this.props.foodArray.map(ingredient => {
      return <Ingredient
        key = {ingredient.id}
        ingredient = {ingredient}
        ingedientClickHandler = {this.props.ingredientClickHandler}
        />
    })
  }

  render(){
    return(
      <div>
        <h1>Fridge</h1>
        {this.displayFood()}
      </div>

    )
  }

}


export default Fridge
