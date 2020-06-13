import React from 'react';
import LinkCard from './LinkCard';
import catSvg from '../../assets/pets.svg';
import './linkCards.scss';

const LinkCards = () => (
  <section className="linkcard__wrapper">
    <LinkCard img={catSvg} text="Dyr til omplassering" link="lorem" />
    <LinkCard img={catSvg} text="Dyr til omplassering" link="lorem" />
    <LinkCard img={catSvg} text="Dyr til omplassering" link="lorem" />
  </section>
);

export default LinkCards;
