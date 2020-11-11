import React from "react";
import { NutritionLabel } from "./NutritionLabel";
import {Modal, Button} from "react-bootstrap"

class Nutrition extends React.Component {

  render() {
    let nutr = this.props.nutritionInfo;
    return (
        <div className="nutrition-info">
          {this.props.nutritionInfo && (
            <Modal
              show={this.props.show}
              onHide={this.props.onHide}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter center">
                    Nutrition Label for {this.props.ingredientName}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="recipe-modal-font">
                  {nutr && <NutritionLabel nutritionInfo={nutr}/>}
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>
          )}
        </div>
    );
  }
}

export default Nutrition;
