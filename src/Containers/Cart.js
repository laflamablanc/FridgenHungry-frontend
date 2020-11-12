import React from 'react';
import Ingredient from '../Components/Ingredient';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../Utilities/items'

const Cart = (props) => {

  const[{isOver}, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => props.dragHandler(item),
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  })


  const displayFood = () => {
    return props.foodArray.map(ingredient => {
      return (
        <Grid item xs = {3}>
          <Ingredient
            key = {ingredient.id}
            ingredient = {ingredient}
            removeIngredient = {props.removeIngredient}
            fridge = "cart"
          />
        </Grid>
      )
    })
  }


  return(
    <div>
      <h1>Cart</h1>
      <div className = "cart" style={{
        backgroundPosition: 'center',
        backgroundSize: "130% 120%",
        backgroundRepeat: 'no-repeat',
        border: isOver? "5px solid blue" : "5px solid red"
      }}
      ref={drop}
      >
        <Grid container spacing={1}>
          {displayFood()}
        </Grid>
      </div>
    </div>
  )
}

export default Cart
