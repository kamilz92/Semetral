import React from 'react';
import './socials.scss';
import instaIcon from '../../assets/instagram.svg';
import fbIcon from '../../assets/facebook.svg';

const Socials = () => (
  <div className="socials">
    <a className="socials__link" href="https://www.instagram.com/dyrebeskyttelsenbergen/">
      <img className="socials__img" src={instaIcon} alt="instagram logo" />
    </a>
    <a className="socials__link" href="https://www.facebook.com/DyrebeskyttelsenBergen/">
      <img className="socials__img" src={fbIcon} alt="facebook logo" />
    </a>
  </div>
);

export default Socials;
