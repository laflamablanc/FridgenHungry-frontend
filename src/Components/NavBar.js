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
      <NavLink to="/fridge" exact style={link} activeStyle = {{background:'darkblue'}}>Fridge</NavLink>
      <NavLink to="/recipes" exact style={link} activeStyle = {{background:'darkblue'}}>Recipes</NavLink>
      <NavLink to="/cart" exact style={link} activeStyle = {{background:'darkblue'}}>Cart</NavLink>
  </div>
  );
};

export default NavBar;
