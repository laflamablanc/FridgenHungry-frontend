import React from 'react'
import Ingredient from '../Components/Ingredient'
import Grid from '@material-ui/core/Grid'

class Fridge extends React.Component {

  displayFood = () => {
    return this.props.foodArray.map(ingredient => {
      return (
        <Grid item xs = {3}>
          <Ingredient
            key = {ingredient.id}
            ingredient = {ingredient}
            removeIngredient = {this.props.removeIngredient}
            fridge = "hey"
          />
        </Grid>
      )
    })
  }

  render(){
    return(
      <div className = "fridge">
        <h1>Fridge</h1>
        <Grid container spacing={1}>
          {this.displayFood()}
        </Grid>
      </div>

    )
  }


}


export default Fridge
