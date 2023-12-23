import React from 'react'
import style from './service.module.css';
import group835 from '../../../asset/Group 835.png';
import group834 from '../../../asset/8888.png';
import group836 from '../../../asset/Group 836.png';
import path1 from '../../../asset/Path -1.png';

export const ServiceCar = () => {
    return (
        <div className='container'>
            <div className={style.service}>
            <div className={style.product}>
                <div className={style.imgBox}>
                    <img src={group835} alt='service' />
                </div>
                <div className={style.specifies}>
                    <p>WHY CHOOSE BMW FINANCIAL SERVICES?</p>
                    <text>Discover flexible finance solutions across our range of BMW Approved Used Cars with BMW Financial Services. With something that matters so much, choose official finance from BMW.</text>
                    <div>View More</div>
                </div>
            </div>
            <div className={style.product}>
                <div className={style.imgBox}>
                    <img src={group834} alt='service' />
                </div>
                <div className={style.specifies}>
                    <p>FIND A BMW CENTRE.</p>
                    <text>Find details of your closest BMW Centre.</text>
                    <div>Locate A BMW Centre</div>
                </div>
            </div>
            <div className={style.product}>
                <div className={style.imgBox}>
                    <img src={group836} alt='service' />
                </div>
                <div className={style.specifies}>
                    <p>DOWNLOAD THE MY BMW APP.</p>
                    <text>From sending your destination directly to your BMW, checking its status or locking remotely, plus easy access to BMW services, the My BMW app remotely connects you to your car and the world of BMW, anytime,</text>
                    <div>Download Now</div>
                </div>
            </div>
            <div className={style.product}>
                <div className={style.imgBox}>
                    <img src={path1} alt='service' />
                </div>
                <div className={style.specifies}>
                    <p>BMW OWNER'S DIRECTORY.</p>
                    <text>As a proud owner, find everything you need for your BMW in one place, including BMW Accessories, 24/7 Roadside Assitance, Warranties, Accident Support, Servicing and more.</text>
                    <div>Find Out More</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ServiceCar;