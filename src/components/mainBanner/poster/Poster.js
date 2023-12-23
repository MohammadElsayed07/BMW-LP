import React from 'react';
import style from './poster.module.css';
import firstCar from '../../../asset/firstCar.png';
import secondCar from '../../../asset/secondCar.png';
import thirdcar from '../../../asset/thirdcar.png';

const Poster = () => {
    return (
        <div className='container'>
            <div className={style.poster_container}>
                <img
                    className={style.poster}
                    src={firstCar}
                    alt="Poster"
                />
                <div>
                    <p>sell back your bmw.</p>
                    <text>Why not sell your BMW back to the experts and get a <br /> trusted price for your car? Simply provide us with the <br /> details and your local BMW Centre will be in touch with <br /> a provisional valuation.</text>
                    <br />
                    <br />
                    <text>Request a Valuation.</text>
                </div>
            </div>
            <hr style={{ color: 'white' }} />
            <div className={style.poster_container}>
                <img
                    className={style.poster}
                    src={secondCar}
                    alt="Poster"
                />
                <div style={{ position: "absolute", left: "670px" }}>
                    <p>BENEFITS OF BUYING APPROVED USED.</p>
                    <ul style={{ paddingLeft: "10px" }}>
                        <li>12+ mth BMW Warranty</li>
                        <li>12+ mth BMW Roadside Assistance</li>
                        <li>12+ mth MOT Cover</li>
                        <li>Checked by BMW Technicians</li>
                    </ul>
                    <text>Request a Valuation.</text>
                </div>
            </div>
            <hr style={{ color: 'white' }} />
            <div className={style.poster_container}>
                <img
                    className={style.poster}
                    src={thirdcar}
                    alt="Poster"
                />
                <div>
                    <p>FINANCE YOUR CAR WITH BMW FINANCE OFFERS.</p>
                    <text>Configure your perfect finance deal with BMW Finance <br /> Services on Approved Used Cars now. Search available <br /> cars that match your monthly budget and deposit now.</text>
                    <br />
                    <br />
                    <text>Request a Valuation.</text>
                </div>
            </div>
        </div>
    );
}

export default Poster;