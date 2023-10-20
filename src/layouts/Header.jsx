import React from 'react';
import { Navbar } from '../components/Navbar';
import logo from '../assets/images/logo.svg';

function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="logo sportsee" />
        <Navbar></Navbar>
      </header>
    </>
  );
}

export default Header;
