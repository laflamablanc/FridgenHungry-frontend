import React from 'react'
import Ingredient from '../Components/Ingredient'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom';

class Fridge extends React.Component {

  displayFood = () => {
    return this.props.fridge.ingredients.map(ingredient => {
      return (
        <Grid item xs = {3}>
          <Ingredient
            key = {ingredient.id}
            ingredient = {ingredient}
            removeIngredient = {this.props.removeIngredient}
            fridge = ""
          />
        </Grid>
      )
    })
  }

  render(){
    console.log("My Fridge", this.props.fridge)
    return(
      <div className = "fridge">
        <h1>Fridge</h1>
        <Grid container spacing={1}>
          {this.displayFood()}
        </Grid>
        <Link to={'/recipes'}> See Recipes </Link>
      </div>

    )
  }


}


export default Fridge
