// Component with Arrow Fn
import React from 'react';
import { Link } from 'react-router-dom';

// Function comp with arrow fn
const Menu = () => {
  return(
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/posts" className="nav-link">Posts</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">About</Link>
      </li>
    </ul>
  )
}

export default Menu;