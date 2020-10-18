import React from 'react';
import banner from '../../img/Banners/video.mp4';
import './styles/video.css'; 


function Video() {
  return (
    <div className='containerVideoHome'>
      <video className='videoHome' src={banner} autoPlay muted loop/>
    </div>
  );
}

export default Video;
