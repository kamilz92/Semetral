import React from 'react';
import { Link } from 'react-router-dom';
import './petcard.scss';

const PetCard = ({ name, img, id }) => (
  <div className="petCard">
    <Link className="petCard__link" to={`/pets/${id}`}>
      <img className="petCard__bg" alt="" src={img} />
      <div className="petCard__textWrapper">
        <span className="petCard__text">{name}</span>
      </div>
    </Link>
  </div>
);

export default PetCard;
