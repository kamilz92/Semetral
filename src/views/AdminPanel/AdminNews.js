import React, { useContext } from 'react';
import './admin.scss';
import { Link } from 'react-router-dom';
import Heading from '../../components/Heading/Heading';
import FormNews from '../../components/Form/FormNews';
import { NewsContext } from '../../context/NewsContext';

const Admin = () => {
  const { news, removeNews } = useContext(NewsContext);
  console.log(news);
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
        <Heading tag="h3">Legg til eller fjern nyheter</Heading>
        <div className="admin__wrapper">
          <div className="admin__add">
            <FormNews />
          </div>
          <div className="admin__remove">
            <ul>
              {news.map((item) => (
                <div key={item.title}>
                  <p>{item.title}</p>
                  <p>{item.text}</p>
                  <button type="button" onClick={() => removeNews(item.title)}>Remove</button>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
