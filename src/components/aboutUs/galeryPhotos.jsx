import React, { Fragment } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Galeria1 from "../../img/AboutUs/Galery/galeria1.jpg";
import Galeria2 from "../../img/AboutUs/Galery/galeria2.jpg";
import Galeria3 from "../../img/AboutUs/Galery/galeria3.jpg";
import Galeria4 from "../../img/AboutUs/Galery/galeria4.jpeg";
import Galeria5 from "../../img/AboutUs/Galery/galeria5.jpg";
import Galeria6 from "../../img/AboutUs/Galery/galeria6.jpg";
import "./styles/galeryPhoto.css";



const GaleryPhoto = () => {

  const responsive = {
    0: { items: 1 },
    360: { items: 2 },
    1024: { items: 3 },
  };
  
  const items = [
    <div className="item">
      <img className="imgGalery" alt="photo" src={Galeria1} />
    </div>,
    <div className="item">
      <img className="imgGalery" alt="photo" src={Galeria2} />
    </div>,
    <div className="item">
      <img className="imgGalery" alt="photo" src={Galeria3} />
    </div>,
    <div className="item">
       <img className="imgGalery" alt="photo" src={Galeria4} />
    </div>,
    <div className="item">
       <img className="imgGalery" alt="photo" src={Galeria5} />
    </div>,
    <div className="item">
       <img className="imgGalery" alt="photo" src={Galeria6} />
    </div>,
  ];
  return (
   <Fragment>
   <div className='sectionGaleryPhotos'>
   
    <h1 className='titleGalery'>GALERIA</h1>

    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      autoPlay
      autoPlayControls
      autoPlayStrategy="none"
      autoPlayInterval={800}
      animationDuration={700}
      animationType="slide"
      infinite
      touchTracking={false}
      disableDotsControls
      disableButtonsControls
    />
    </div>
    </Fragment>
  );
};

export default GaleryPhoto;
