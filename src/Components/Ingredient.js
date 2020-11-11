import React from 'react'
import {ItemTypes} from '../Utilities/items'
import {Card, CardActions, CardContent} from '@material-ui/core'
import { useDrag } from 'react-dnd'


const Ingredient = (props) => {

    const [{isDragging}, drag] = useDrag({
      item: {
        type: ItemTypes.CARD,
        id: props.ingredient.id
      },
      collect: monitor => ({
        isDragging: !!monitor.isDragging()
      })
    })


  const clickHandler = (e) => {
    if (props.fridge === undefined){
      props.ingredientClickHandler(props.ingredient)
    }
    else if (props.fridge !== undefined){
      props.removeIngredient(props.ingredient)
    }

  }

  const dragHandler = (e) => {
    // if (e.target.name === "ingredient-card") {
      console.log(e.target.name)
    // }
  }


  const removeHandler = () => {
    console.log(props)
    props.removeIngredient(props.ingredient)
  }

    return(
      <div
        ref = {drag}
        >
        <Card
          className = "ingredient-card"
          onClick={clickHandler}
          >
        <h2>{props.ingredient.name}</h2>
        <img
          src={props.ingredient.image}
          alt={props.ingredient.name}
          height = '75'
          className = "ingredient-image"
          />
        </Card>
      </div>
      // <button onClick={this.clickHandler}> {this.props.fridge !== undefined ? "Remove" : "Add"}</button>
    )

}


export default Ingredient

// <h2> {this.props.ingredient.name} </h2>
// <div> {this.props.ingredient.category} </div>
