import React from 'react';
import './navBtn.scss';

const HamburgerBtn = () => {
  const handleBtn = () => {
    document.querySelector('.nav-btn__span').classList.toggle('active');
    document.querySelector('.nav').classList.toggle('active');
  };
  return (
    <button type="button" onClick={handleBtn} className="nav-btn">
      <span className="nav-btn__span" />
    </button>
  );
};

export default HamburgerBtn;
