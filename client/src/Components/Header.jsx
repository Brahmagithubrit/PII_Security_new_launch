import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <div className='header'>
      <div className="logo">T3 The Team Tenacious</div>
      <div className="searchContainer">
        <input id='search' type="text" />
        <div className = "search_container">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-style"  /> 
          <button id="search_btn">search</button>
        </div>
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
