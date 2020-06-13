import React from 'react';
import './header.scss';
import Logo from '../Logo/Logo';
import Socials from '../Socials/Socials';
import NavBtn from '../NavBtn/NavBtn';
import Nav from '../Nav/Nav';

const Header = () => (
  <header className="header">
    <Logo />
    <Socials />
    <NavBtn />
    <Nav />
  </header>
);

export default Header;
