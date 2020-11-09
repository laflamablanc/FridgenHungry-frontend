import React from "react";
import { NutritionLabel } from "./NutritionLabel";
import { Modal, Button } from 'react-bootstrap';

const NUTRITION_API_URL = "https://api.edamam.com/api/nutrition-details";

class Nutrition extends React.Component {
  state = {
    show: false,
    nutritionInfo: null,
  };

  openModal = () => {

  }
  
  onNutritionSubmit = (ing_array) => {
    let reqBody = { title: "test", ingr: ing_array };
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
      .then((data) => this.setState({ nutritionInfo: data }));
  };
  render() {
    console.log(this.state.nutritionInfo);
    let nutr = this.state.nutritionInfo;
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let ing = e.target[1].value + " " + e.target[0].value;
            this.onNutritionSubmit([ing]);
          }}
        >
          <label for="food">Choose a food:</label>

          <select name="food" id="food">
            {this.props.foodArray.map((n, i) => {
              return (
                <option value={n.name} id={i}>
                  {n.name}
                </option>
              );
            })}
          </select>

          <label for="quantity">Number of quantity (0-25):</label>

          <input type="number" id="quantity" name="quantity" min="0" max="25" />
          <input type="submit" name="Submit" />
        </form>
        <div className="nutrition-info">
          {this.state.nutritionInfo && (
            <div>
              <Modal.Dialog>
                <Modal.Header closeButton>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <NutritionLabel nutritionInfo={this.state.nutritionInfo} />
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary">Close</Button>
                  <Button variant="primary">Save changes</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Nutrition;
