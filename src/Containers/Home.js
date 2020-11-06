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


  render(){
    return(
      <div>
        <IngredientsContainer ingredientClickHandler = {this.ingredientClickHandler}/>
        <Fridge foodArray={this.state.fridge}/>
      </div>
    )
  }
}

export default Home
