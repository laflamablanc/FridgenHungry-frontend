import React from 'react'

class Ingredient extends React.Component {

  clickHandler = () => {
    this.props.ingedientClickHandler(this.props.ingredient)
  }

  render(){
    return(
      <div>
        <h2>{this.props.ingredient.name}</h2>
        <img src={this.props.ingredient.image} alt={this.props.ingredient.name}/>
        <div>{this.props.ingredient.category}</div>
        <button onClick={this.clickHandler}> Add Ingredient </button>
      </div>
    )
  }

}


export default Ingredient

// <h2> {this.props.ingredient.name} </h2>
// <div> {this.props.ingredient.category} </div>
