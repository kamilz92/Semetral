import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import { PetContext } from '../../context/PetsContext';

const PetInfo = () => {
  const { pets } = useContext(PetContext);
  const { id } = useParams();
  const pet = pets.filter((item) => item.name === id);
  const data = pet[0];
  console.log(pet);
  return (
    <>
      <Header />
      <section className="petInfo">
        {pet.length === 0 ? (
          <>
            <Link to="/pets">Gå tilbake</Link>
            <p style={{ minHeight: '100%', color: 'red' }}>Error</p>
          </>
        ) : (
          <div className="petInfo__div">
            <img className="petInfo__img" src={data.img} alt="" />
            <p className="petInfo__name">{data.name}</p>
            <div className="petInfo__data">
              <span>{data.age}</span>
              <span>{data.sex}</span>
            </div>
            <p className="petInfo__description">{data.description}</p>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default PetInfo;
