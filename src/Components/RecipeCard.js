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
        <Card onClick={this.onShow}>
        {this.props.recipe.name}
        </Card>
        <Recipe show={this.state.showRecipeModal} onHide={this.onHide} recipeID={this.props.recipe.id}/>
      </div>
    )
  }
}
export default RecipeCard
