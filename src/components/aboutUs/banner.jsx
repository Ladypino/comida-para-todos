import React from 'react';
import banner from '../../img/Banners/aboutus.jpg';
import './styles/banner.css';


function Banner() {
  return (
    <div className='containerBanner'>
       <img src={banner} alt="" className='banner'/> 
    </div>
  );
}

export default Banner;