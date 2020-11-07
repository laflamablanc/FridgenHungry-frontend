import React from 'react'

class Ingredient extends React.Component {

  clickHandler = (e) => {
    if (this.props.fridge === undefined){
      this.props.ingredientClickHandler(this.props.ingredient)
    }
    else if (this.props.fridge !== undefined){
      this.props.removeIngredient(this.props.ingredient)
    }

  }

  removeHandler = () => {
    console.log(this.props)
    this.props.removeIngredient(this.props.ingredient)
  }

  render(){
    return(
      <div>
        <h2>{this.props.ingredient.name}</h2>
        <img
          src={this.props.ingredient.image}
          alt={this.props.ingredient.name}
          height = '75'/>
        <div>{this.props.ingredient.category}</div>
        <button onClick={this.clickHandler}> {this.props.fridge !== undefined ? "Remove" : "Add"}</button>
      </div>
    )
  }

}


export default Ingredient

// <h2> {this.props.ingredient.name} </h2>
// <div> {this.props.ingredient.category} </div>
