import React from 'react';
import banner from '../../img/Banners/donacio.jpg';
import './styles/bannerdonation.css';

function BannerDonation() {
  return (
    <div className='containerBannerDonation'>
       <img src={banner} className='bannerDonation'/> 
    </div>
  );
}

export default BannerDonation;