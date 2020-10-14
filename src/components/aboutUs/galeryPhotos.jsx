import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Galeria1 from '../../img/AboutUs/Galery/galeria1.jpg';
import Galeria2 from '../../img/AboutUs/Galery/galeria2.jpg';
import Galeria3 from '../../img/AboutUs/Galery/galeria3.jpg';
import Galeria4 from '../../img/AboutUs/Galery/galeria4.jpeg';
import Galeria5 from '../../img/AboutUs/Galery/galeria5.jpg';
import Galeria6 from '../../img/AboutUs/Galery/galeria6.jpg';
import './styles/galeryPhoto.css';

function GaleryPhoto() {
  return (
    <div className='sectionGaleryPhotos'>
      <h1>GALERÍA</h1>
      <Carousel className='carousel' autoPlay showThumbs={false} infiniteLoop={true}>
        <div className='carouselContainer'>
          <img className='imgGalery' alt="photo" src={Galeria1} />
        </div>
        <div className='carouselContainer'>
          <img className='imgGalery' alt="photo" src={Galeria2} />
        </div>
        <div className='carouselContainer'>
          <img className='imgGalery' alt="photo" src={Galeria3} />
</div>
  <div className='carouselContainer'>
          <img className='imgGalery' alt="photo" src={Galeria4} />
</div>
 <div className='carouselContainer'>
          <img className='imgGalery' alt="photo" src={Galeria5} />
</div>
  <div className='carouselContainer'>
          <img className='imgGalery' alt="photo" src={Galeria6} />
        </div>
        
      </Carousel>
    </div>
  );
}

export default GaleryPhoto;