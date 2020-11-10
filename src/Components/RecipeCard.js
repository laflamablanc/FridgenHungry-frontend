import React from 'react'


class RecipeCard extends React.Component {


  render() {
    console.log("Recipe Card Props", this.props.recipe)
    return (
      <div>
        {this.props.recipe.name}
      </div>
    )
  }
}

export default RecipeCard
