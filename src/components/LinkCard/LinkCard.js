import React from 'react';

const LinkCard = ({ img, text, link }) => (
  <div className="linkcard__card">
    <a href={link} className="linkcard__link">
      <img className="linkcard__img" src={img} alt="" />
      <span className="linkcard__text">{text}</span>
    </a>
  </div>
);

export default LinkCard;
