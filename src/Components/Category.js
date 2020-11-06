import React, { Component } from 'react';

class Category extends Component {

  changeHandler = (e) => {
      this.props.filterFood(e.target.value)
  }

  render() {
    return (
      <nav>
        <h2>Food Category</h2>
        <select onChange={this.changeHandler}>
          <option value="All">All</option>
          <option value="Dairy">Dairy</option>
          <option value="Protein">Protein</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Grain">Grain</option>
          <option value="Fruit">Fruit</option>
          <option value="Spices">Spices</option>
        </select>
      </nav>
    );
  }

}

export default Category;