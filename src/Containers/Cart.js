import React from 'react'
import Ingredient from '../Components/Ingredient'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom';

class Cart extends React.Component {

  displayFood = () => {
    return this.props.foodArray.map(ingredient => {
      return (
        <Grid item xs = {3}>
          <Ingredient
            key = {ingredient.id}
            ingredient = {ingredient}
            removeIngredient = {this.props.removeIngredient}
            fridge = ""
          />
        </Grid>
      )
    })
  }

  render(){
    return(
      <div className = "cart" style={{
          backgroundImage: "url(" + "https://i.imgur.com/0IStklx.png" + ")",
          backgroundPosition: 'center',
          backgroundSize: "100% 100%",
          backgroundRepeat: 'no-repeat'
        }}>
        <h1>Cart</h1>
        <Grid container spacing={1}>
          {this.displayFood()}
        </Grid>
        <Link to={'/recipes'}>
          <button type="button">
            <span>Login</span>
          </button>
        </Link>
      </div>

    )
  }


}


export default Cart
