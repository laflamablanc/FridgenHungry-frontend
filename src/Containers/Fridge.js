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
        <div className = "fridge-container">
          <Grid item xs = {12} container spacing = {2}>
            <Grid item xs = {6}>
            </Grid>
            <Grid item xs = {6}>
              <Grid container spacing={5}>
                {this.displayFood()}
              </Grid>
            </Grid>
          </Grid>
        </div>
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
