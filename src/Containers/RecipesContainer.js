import React from 'react'
import Ingredient from '../Components/Ingredient'
import Category from '../Components/Category'
import Grid from '@material-ui/core/Grid'
import Recipe from '../Components/Recipe'

class RecipesContainer extends React.Component {


  state = {

    recipes: [],
    filtered: null
  }

  returnArray = () => {
    if(this.state.filtered === null) {
      return this.state.recipes
    } else {
      return this.state.filtered
    }
  }

  filterFood = (category) => {
    console.log('filter')
    // if (category === "Dairy"){
    //   let array = this.state.recipes.filter(recipe => recipe.category === "Dairy")
    //   this.setState({filtered: array})
    // } else if (category === "Vegetables"){
    //   let array = this.state.recipes.filter(recipe => recipe.category === "Vegetables")
    //   this.setState({filtered: array})
    // } else if (category === "Protein"){
    //   let array = this.state.recipes.filter(recipe => recipe.category === "Protein")
    //   this.setState({filtered: array})
    // } else if (category === "Grains"){
    //   let array = this.state.recipes.filter(recipe => recipe.category === "Grains")
    //   this.setState({filtered: array})
    // } else if (category === "Fruit") {
    // let array = this.state.recipes.filter(recipe => recipe.category === "Fruit")
    // this.setState({filtered: array})
    // } else if (category === "Spices") {
    // let array = this.state.recipes.filter(recipe => recipe.category === "Spices")
    // this.setState({filtered: array})
    // } else {
    //   this.setState({filtered: null})
    // }
  }
  renderRecipes = () => {
    let recipesArray = this.returnArray()
    return recipesArray.map(recipe => {
      return (
        <Grid item xs = {3}>
          <Recipe
            key = {recipe.id}
            recipe = {recipe}
            recipeClickHandler = {this.props.recipeClickHandler}
            />
        </Grid>
      )
    })
  }

    render(){
      console.log("State", this.state.recipes)
      return(
        <div>
          <h1> Recipes Container </h1>
          <div className = "recipes-container">
            <Grid container spacing={1}>
              {this.renderRecipes()}
            </Grid>
          </div>
        </div>
      )
    }

  componentDidMount() {
    fetch('http://localhost:4000/recipes/')
    .then(r=>r.json())
    .then((recipesArray) => {
      this.setState({
        recipes: recipesArray
      })
    })
  }

}


export default RecipesContainer
