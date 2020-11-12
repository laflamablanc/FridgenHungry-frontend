import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className = "navbar">
      <NavLink className="navbar" to="/fridge" exact style={link} activeStyle = {{background:'darkblue'}}>
        <button className="navbar-button" type="button">
          <span>Fridge</span>
        </button>
      </NavLink>
      <NavLink className="navbar" to="/recipes" exact style={link} activeStyle = {{background:'darkblue'}}>
        <button className="navbar-button" type="button">
          <span>Recipes</span>
        </button>
      </NavLink>
      <NavLink className="navbar" to="/cart" exact style={link} activeStyle = {{background:'darkblue'}}>
        <button className="navbar-button" type="button">
          <span>Cart</span>
        </button>
      </NavLink>
    </div>
  );
};

export default NavBar;
