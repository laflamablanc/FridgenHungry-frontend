import React from 'react'
import IngredientsContainer from '../Containers/IngredientsContainer'
import Fridge from '../Components/Fridge'

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
        <IngredientsContainer ingredientClickHandler = {this.ingredientClickHandler}/>
        <Fridge foodArray={this.state.fridge} removeIngredient = {this.removeIngredient}/>
      </div>
    )
  }
}

export default Home
