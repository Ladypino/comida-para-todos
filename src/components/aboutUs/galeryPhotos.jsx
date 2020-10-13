import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import foto from '../../img/logo.png';
import './styles/galeryPhoto.css';

function GaleryPhoto() {
  return (
    <div className='sectionGaleryPhotos'>
      <h1>GALERÍA</h1>
      <Carousel className='carousel' autoPlay showThumbs={false} infiniteLoop={true}>
        <div className='carouselContainer'>
          <img className='imgGalery' alt="photo" src={foto} />
        </div>
        <div className='carouselContainer'>
          <img className='imgGalery' alt="photo" src={foto} />
        </div>
        <div className='carouselContainer'>
          <img className='imgGalery' alt="photo" src={foto} />
        </div>
        <div className='carouselContainer'>
          <img className='imgGalery' alt="photo" src={foto} />
        </div>
      </Carousel>
    </div>
  );
}

export default GaleryPhoto;