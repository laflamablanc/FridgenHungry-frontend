import React from "react";
import {Modal, Button} from "react-bootstrap"


class Recipe extends React.Component {
  state = {
  recipe: null,
  isLoaded: false
}

componentDidMount() {
  fetch('http://localhost:4000/recipes/' + this.props.recipeID)
  .then(response => response.json())
  .then(data => this.setState({...data, isLoaded: true}))
}

render() {
  console.log(this.state);

  let recipeSteps;
  if (this.state.recipe){
    recipeSteps = this.state.recipe.instructions.split(',')
  }
  return (
    <div>
      {this.state.isLoaded &&
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter center">
            {this.state.recipe.name? this.state.recipe.name : "Recipe Not Found"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="recipe-modal-font">
          <h4>Ingredients</h4>
          <ul>
            {this.state.ingredients.map(ing => <li>{ingredientCard(ing)}</li>)}
          </ul>
          <h4>Instructions</h4>
          <ol>
            {recipeSteps.map(step => <li>{step}</li>)}
          </ol>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      }
    </div>
  );
  }
}

const ingredientCard = (props) => {
  return (
    <div>
      <img src={props.image} style={{height: "20px", width: "20px"}}/>
      <p>{props.name}</p>
    </div>
  )
}

export default Recipe;
