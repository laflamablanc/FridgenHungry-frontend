import React from 'react'
import {NutritionLabel} from './NutritionLabel'
const NUTRITION_API_URL=  'https://api.edamam.com/api/nutrition-details'

class Nutrition extends React.Component {
    state = {
        nutritionInfo: null
    }

    onNutritionSubmit = (ing_array) => {
        let reqBody = {title: "test", ingr: ing_array}
        let options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody)
        }
        fetch(NUTRITION_API_URL + '?app_id=e9e13731&app_key=f2b691eba769d4e59a1a770ae787fa41', options)
        .then(response => response.json())
        .then(data => this.setState({nutritionInfo: data}))
    }
render(){
    let nutr = this.state.nutritionInfo
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                let ing = e.target[1].value + " " + e.target[0].value
                this.onNutritionSubmit( [ ing ] )
            }}>
                <label for="food">Choose a food:</label>

                <select name="food" id="food">
                    {this.props.foodArray.map((n,i) => {
                        return  <option value={n.name} id={i}>{n.name}</option>
                    })}
                </select>

                <label for="quantity">Number of quantity (0-25):</label>

                <input type="number" id="quantity" name="quantity"
                    min="0" max="25"/>
                <input type="submit" name="Submit" />
            </form>
            <div className="nutrition-info">
                {this.state.nutritionInfo &&
                    <div>
                        <h5>Nutrition facts</h5>
                        <ul>
                            <li>Calories: {nutr.calories}</li>
                            <li>Diet Labels: {nutr.dietLabels.map((d) => d + " ")}</li>
                            <li>Carbs: {nutr.totalNutrientsKCal.CHOCDF_KCAL.quantity} Calories</li>
                            <li>Protein: {nutr.totalNutrientsKCal.PROCNT_KCAL.quantity} Calories</li>
                            <li>Fat: {nutr.totalNutrientsKCal.FAT_KCAL.quantity} Calories</li>
                            <li>Energy: {nutr.totalNutrientsKCal.ENERC_KCAL.quantity} Calories</li>


                        </ul>
                        <NutritionLabel nutritionInfo={this.state.nutritionInfo} />
                    </div>

                }

            </div>
        </div>
    )
}


}

export default Nutrition
