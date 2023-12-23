import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import shutterstock_472592110 from '../../../asset/shutterstock_472592110.png';
import style from './header.module.css';

function Header() {
  return (
    <div className={style.header_container}>
      <img
        className={style.header_image}
        src={shutterstock_472592110}
        alt="Header"
      />
      <div className="container">
        <div className={style.header_text}>
          <h1>BMW APPROVED USED CARS.</h1>
          <p>Search, reserve and buy your Approved Used BMW - all online.</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
