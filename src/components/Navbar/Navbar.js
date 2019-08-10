import React from 'react';
import './style.css';

const Navbar = props => (
  <div>
    <nav className="navbar navbar-light ">
      <a href="/" className="click">
        Clicky Game
      </a>
      <div className="title">{props.message}</div>
      <div className="scores">
        Score: {props.score} | Highscore: {props.highscore}
      </div>
    </nav>
  </div>
);

export default Navbar;
