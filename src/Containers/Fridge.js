import React from 'react'
import Ingredient from '../Components/Ingredient'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom';

class Fridge extends React.Component {

  state = {
    fridgeIngredients: []
  }



  displayFood = () => {
    return this.state.fridgeIngredients.map(ingredient => {
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

  componentDidMount(){
    fetch('http://localhost:4000/fridges/'+this.props.fridge.id)
    .then(response => response.json())
    .then(fridgeObj => {
      this.setState({
        fridgeIngredients: fridgeObj.ingredients
      })
    })
  }

}




export default Fridge
