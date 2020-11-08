import React from 'react'
import IngredientsContainer from '../Containers/IngredientsContainer'
import Fridge from './Fridge'
import Grid from '@material-ui/core/Grid'
import Nutrition from '../Components/Nutrition'

class Home extends React.Component {

  state = {
    fridge: []
  }

  ingredientClickHandler = (ingredientObj) => {
    this.setState({
      fridge: [...this.state.fridge, ingredientObj]
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
