import React from 'react'
import Category from '../Components/Category'
import Grid from '@material-ui/core/Grid'
import RecipeCard from '../Components/RecipeCard'

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
    if (recipesArray){
      return recipesArray.map(recipe => {
        return (
          <Grid item xs = {3}>
            <RecipeCard
              key = {recipe.id}
              recipe = {recipe}
              recipeClickHandler = {this.props.recipeClickHandler}
              />
          </Grid>
        )
      })
    } else {
      return <h3> We're sorry! No recipes match your selected Ingredients. Please try again!</h3>
    }
  }

    render(){
      console.log("Recipe Container State", this.state.recipes)
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
    let fridgeId = this.props.fridge.id
    let url = 'http://localhost:4000/fridges/' + fridgeId
    fetch(url)
    .then(r=>r.json())
    .then(data => {
      this.setState({
        recipes: data.recipes
      })
    })
  }
}


export default RecipesContainer
