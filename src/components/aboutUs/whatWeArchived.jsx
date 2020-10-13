import React from 'react';
import './styles/whatWeArchived.css';
import lunch from '../../img/AboutUs/whatWeArchived/almuerzoSolidario.png';
import restorant from '../../img/AboutUs/whatWeArchived/restaurant.png';
import peque from '../../img/AboutUs/whatWeArchived/pequeProduc.png';
import transportis from '../../img/AboutUs/whatWeArchived/transporti.png';
import comedor from '../../img/AboutUs/whatWeArchived/comedor.png';
import region from '../../img/AboutUs/whatWeArchived/region.png';

function WhatWeArchived() {
  return (
    <div className='sectionWhatWeArchived'>
      <h1>NUESTRA RED HA LOGRADO</h1>
      <div className='containerWhatWeArchived'>
      <div className='containerPhotoText'>
        <div className='eachPhotoArchived'>
          <img src={lunch} className='photowahtwearchived'/>
        </div>
        <p className='textx'><strong>97.644</strong>
        <br/>
        Almuerzos Solidarios</p>
      </div>
      <div className='containerPhotoText'>
        <div className='eachPhotoArchived'>
          <img src={restorant} className='photowahtwearchived' />
        </div>
        <p className='textx'><strong>19</strong>
        <br/>
        Restaurantes colaboradores</p>
      </div>
      <div className='containerPhotoText'>
        <div className='eachPhotoArchived'>
          <img src={peque} className='photowahtwearchived'/>
        </div>
        <p className='textx'><strong>19</strong>
        <br/>
        Pequeños productores</p>
      </div>
      <div className='containerPhotoText'>
        <div className='eachPhotoArchived'>
          <img src={transportis} className='photowahtwearchived'/>
        </div>
        <p className='textx'><strong>8</strong>
        <br/>
        Transportista</p>
      </div>
      <div className='containerPhotoText'>
        <div className='eachPhotoArchived'>
          <img src={comedor} className='photowahtwearchived'/>
        </div>
        <p className='textx'><strong>28</strong>
        <br/>
        Comedores comunitarios</p>
      </div>
      <div className='containerPhotoText'>
        <div className='eachPhotoArchived'>
          <img src={region} className='photowahtwearchived'/>
        </div>
        <p className='textx'><strong>4</strong>
        <br/>
        Regiones</p>
      </div>
      </div>
    </div>
  );
}

export default WhatWeArchived;