import React from 'react';
import './nav.scss';

const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <a className="nav__link" href="#">Hjem</a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="#">Om oss</a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="#">Til Oomplassering</a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="#">Hvordan Kan du Hjelpe?</a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="#">Kontakt</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
