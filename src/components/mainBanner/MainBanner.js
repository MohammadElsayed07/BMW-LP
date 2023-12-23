import React from 'react';
import Header from '../layout/header/Header';
import Group from './group/Group';
import Search from './search/Search';
import Gallery from './gallery/Gallery';
import Poster from './poster/Poster';
import ServiceCar from './service/ServiceCar';

const MainBanner = () => {
    return (
        <div>
            <Header />
            <Group />
            <Search />
                <hr style={{ margin: '70px 0' }} />
            <Gallery />
                <hr style={{
                width: 900,
                margin: '20px auto 50px',
                borderTop: '1px solid #000000'
                }} />
            <Poster />
            <hr style={{color: 'white', height: '30px'}} />
            <ServiceCar />
        </div>
    )
}

export default MainBanner;