import React from 'react'
import { Link } from 'react-router-dom'
import Recipe from './Recipe'
import {Card, CardActions, CardContent} from '@material-ui/core'


class RecipeCard extends React.Component {
  state = {
    showRecipeModal: false
  }

  onShow = () => {
    console.log("onShow")
    this.setState({
      showRecipeModal:true
    })
  }

  onHide = () => {
    console.log("onHide")
    this.setState({
      showRecipeModal:false
    })
  }

  render() {
    console.log("Recipe Card Props", this.props.recipe)
    return (
      <div>
        <Card className={'recipe-card'}onClick={this.onShow}>
          <h2>{this.props.recipe.name}</h2>
          <img
            src={this.props.recipe.image}
            alt={this.props.recipe.name}
            height = '75'
            className = "ingredient-image"
            />
        </Card>
        <Recipe show={this.state.showRecipeModal} onHide={this.onHide} recipeID={this.props.recipe.id}/>
      </div>
    )
  }
}
export default RecipeCard
