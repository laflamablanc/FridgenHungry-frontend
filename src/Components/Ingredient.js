import React from 'react'
import {Card, CardActions, CardContent} from '@material-ui/core'

class Ingredient extends React.Component {

  clickHandler = (e) => {
    if (this.props.fridge === undefined){
      this.props.ingredientClickHandler(this.props.ingredient)
    }
    else if (this.props.fridge !== undefined){
      this.props.removeIngredient(this.props.ingredient)
    }

  }

  dragHandler = (e) => {
    // if (e.target.name === "ingredient-card") {
      console.log(e.target.name)
    // }
  }


  removeHandler = () => {
    console.log(this.props)
    this.props.removeIngredient(this.props.ingredient)
  }

  render(){
    return(
      <div>
        <Card className = "ingredient-card" draggable onClick={this.clickHandler} onDrag = {this.dragHandler}>
        <h2>{this.props.ingredient.name}</h2>
        <img
          src={this.props.ingredient.image}
          alt={this.props.ingredient.name}
          height = '75'
          className = "ingredient-image"
          />
        </Card>
      </div>
      // <button onClick={this.clickHandler}> {this.props.fridge !== undefined ? "Remove" : "Add"}</button>
    )
  }

}


export default Ingredient

// <h2> {this.props.ingredient.name} </h2>
// <div> {this.props.ingredient.category} </div>
