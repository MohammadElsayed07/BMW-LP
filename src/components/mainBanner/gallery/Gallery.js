import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import style from './gallery.module.css';

const responsive = {
  0: { items: 3.5 },
  568: { items: 3.5 },
  1024: { items: 3.5 },
};


const Gallery = () => {
  const [carData, setCarData] = useState('')

  const items = carData.car?.map((car) => (
    <div style={{marginBottom: -50}}>
      <div key={car.id} className={style.carousel_item}>
        <img
          src={car.src}
          alt={`Item ${car.id + 1}`}
          className={style.carousel_image} />
      </div>
      <div className={style.data}>
        <div className="row">
      <div className="col"><p className={style.title}>{car.title}</p></div>
      <div className="col"><p className={style.price}>{car.price}</p></div>
        </div>
      <p className={style.details}>{car.details}</p>
      <p className={style.model}>{car.model}</p>
      <text className={style.text}>{car.text}</text>
      </div>
      </div>
  ))


  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setCarData(data))
  }, [])

  return (
    <div className="container">
      <AliceCarousel
        mouseTracking
        keyboardNavigation
        disableDotsControls
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  )
};

export default Gallery;