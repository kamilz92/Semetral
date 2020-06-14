import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink exact as="a" className="nav__link" to="/">Hjem</NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" to="/about">Om oss</NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" to="/pets">Til Oomplassering</NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" to="/help">Hvordan Kan du Hjelpe?</NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" to="/contact">Kontakt</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
