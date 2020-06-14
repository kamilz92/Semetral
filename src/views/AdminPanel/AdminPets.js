import React, { useContext } from 'react';
import './admin.scss';
import { Link } from 'react-router-dom';
import Heading from '../../components/Heading/Heading';
import FormPets from '../../components/Form/FormPets';
import { PetContext } from '../../context/PetsContext';

const AdminPets = () => {
  const { pets, removePets } = useContext(PetContext);
  return (
    <div className="admin">
      <div className="admin__sidemenu">
        <ul className="admin__list">
          <li>
            <Link className="admin__link" to="/admin/news">
              nyheter
            </Link>
          </li>
          <li>
            <Link className="admin__link" to="/admin/pets">
              dyr
            </Link>
          </li>
          <li>
            <Link className="admin__link" to="/">
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <div className="admin__control">
        <Heading tag="h3">Legg til eller fjern dyr</Heading>
        <div className="admin__wrapper">
          <div className="admin__add">
            <FormPets pets />
          </div>
          <div className="admin__remove">
            {pets.map((item) => (
              <div key={item.name}>
                <p>{item.name}</p>
                <p>{item.text}</p>
                <button type="button" onClick={() => removePets(item.name)}>Remove</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPets;
