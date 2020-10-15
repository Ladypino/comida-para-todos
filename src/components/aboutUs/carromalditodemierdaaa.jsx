import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Galeria1 from "../../img/AboutUs/Galery/galeria1.jpg";
import Galeria2 from "../../img/AboutUs/Galery/galeria2.jpg";
import Galeria3 from "../../img/AboutUs/Galery/galeria3.jpg";
import Galeria4 from "../../img/AboutUs/Galery/galeria4.jpeg";
import Galeria5 from "../../img/AboutUs/Galery/galeria5.jpg";
import Galeria6 from "../../img/AboutUs/Galery/galeria6.jpg";



class  GaleryPhoto extends React.Component {
  state = {
    galleryItems: [
        <div className="item">
    1<img className="imgGalery" alt="photo" src={Galeria1} />
  </div>,
  <div className="item">
    2<img className="imgGalery" alt="photo" src={Galeria2} />
  </div>,
  <div className="item">
    3<img className="imgGalery" alt="photo" src={Galeria3} />
  </div>,
  <div className="item">
    4 <img className="imgGalery" alt="photo" src={Galeria4} />
  </div>,
  <div className="item">
    5 <img className="imgGalery" alt="photo" src={Galeria5} />
  </div>,
  <div className="item">
    6 <img className="imgGalery" alt="photo" src={Galeria6} />
  </div>,
    ].map((i) => <h2 key={i}>{i}</h2>),
  }

  responsive = {
    0: { items: 1 },
    1024: { items: 2 },
  }

  onSlideChange(e) {
    console.debug('Item`s position during a change: ', e.item)
    console.debug('Slide`s position during a change: ', e.slide)
  }

  onSlideChanged(e) {
    console.debug('Item`s position after changes: ', e.item)
    console.debug('Slide`s position after changes: ', e.slide)
  }

  render() {
    return (
      <AliceCarousel
        items={this.state.galleryItems}
        responsive={this.responsive}
        autoPlayInterval={700}
        autoPlayDirection="slide"
        autoPlay={true}
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        playButtonEnabled={true}
        disableAutoPlayOnAction={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
        mouseTracking
    autoPlay
      autoPlayControls
      autoPlayStrategy="none"
      autoPlayInterval={1000}
      animationDuration={1000}
      animationType="slide"
      infinite
      touchTracking={false}
      disableDotsControls
      disableButtonsControls
      />
    )
  }
};

export default GaleryPhoto;
