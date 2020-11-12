import React, { useState } from 'react'
import {ItemTypes} from '../Utilities/items'
import {Card, CardActions, CardContent} from '@material-ui/core'
import { useDrag } from 'react-dnd'
import Nutrition from '../Components/Nutrition'
const NUTRITION_API_URL = "https://api.edamam.com/api/nutrition-details";

const Ingredient = (props) => {
  console.log("Ingredient Props", props)


    const [{isDragging}, drag] = useDrag({
      item: {
        type: ItemTypes.CARD,
        id: props.ingredient.id,
        ingredient: props.ingredient
      },
      collect: monitor => ({
        isDragging: !!monitor.isDragging()
      })
    })


  const clickHandler = (e) => {
    if (props.fridge === undefined){
      props.ingredientClickHandler(props.ingredient)
    }
    else if (props.fridge === "cart"){
      props.removeIngredient(props.ingredient)
    }
    else if (props.fridge === "fridge"){
      getNutritionInfo(props.ingredient.name)
    }
  }

  const dragHandler = (e) => {
    // if (e.target.name === "ingredient-card") {
      console.log(e.target.name)
    // }
  }

  const getNutritionInfo = (ingredient) => {
    let reqBody = { title: "test", ingr: ["1 " + ingredient] };
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    };
    fetch(
      NUTRITION_API_URL +
        "?app_id=e9e13731&app_key=f2b691eba769d4e59a1a770ae787fa41",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setNutritionInfo(data)
        setModalShow(true)});
  };


  const [show, setShow] = useState(false);

  const [modalShow, setModalShow] = React.useState(false);
  const [nutritionInfo, setNutritionInfo] = React.useState(null);

  const removeHandler = () => {
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
        <Nutrition ingredientName={props.ingredient.name} nutritionInfo={nutritionInfo} show={modalShow} onHide={() => setModalShow(false)}/>
      </div>
      // <button onClick={this.clickHandler}> {this.props.fridge !== undefined ? "Remove" : "Add"}</button>
    )

}


export default Ingredient

// <h2> {this.props.ingredient.name} </h2>
// <div> {this.props.ingredient.category} </div>
