import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className="logo">T3 The Team Tenacious</div>
      <div className="searchContainer">
        <input id='search' type="text" />
        <button id="search_btn">search</button>
      </div>
      <div className="desc">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/some-link">Link</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
        <Link to="/feedback">Feedback</Link>
      </div>
    </div>
  );
}
