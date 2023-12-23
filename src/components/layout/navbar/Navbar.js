import React from 'react';
import logo from '../../../asset/logo.svg';
import cars from '../../../asset/cars.svg';
import search from '../../../asset/search.svg';
import style from './navbar.module.css';

function Navbar() {
  return (
      <nav className={style.navbar}>
        <a className={style.nav_button}>Models</a>
        <a className={style.nav_button}>Discover</a>
        <span/>
        <img className={style.img_nav} src={search} alt='search' style={{padding: 20}} />
        <img className={style.img_nav} src={cars} alt='cars' style={{padding: 10}} />
        <img src={logo} alt='logo' style={{ width: 50, marginLeft: 30 }} />
      </nav>
  );
}

export default Navbar;
