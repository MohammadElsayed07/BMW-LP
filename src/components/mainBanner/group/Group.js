import React from 'react';
import style from './group.module.css';

function Group() {
  return (
    <div className="container">
    <div className={style.container_group}>
        <div><p>Minimum 12 month unlimited mileage BMW Warranty</p></div>
        <div><p>Independent, certified check to verify vehicle history and mileage</p></div>
        <div><p>Only Genuine BMW Parts used - most with a two-year warranty</p></div>
        <div><p>Meticulous checks carried out by our qualified BMW Technicians</p></div>
    </div>
    </div>
  );
}

export default Group;
