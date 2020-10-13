import React, { Fragment } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import a from '../../img/Landing/Alianzas/28.jpg';
import b from '../../img/Landing/Alianzas/27.jpg';
import c from '../../img/Landing/Alianzas/26.jpg';
import d from '../../img/Landing/Alianzas/25.jpg';
// import e from '../../img/Landing/Alianzas/24.jpg';
import f from '../../img/Landing/Alianzas/23.jpg';
import g from '../../img/Landing/Alianzas/22.jpg';
import h from '../../img/Landing/Alianzas/21.jpg';
import i from '../../img/Landing/Alianzas/20.jpg';
import j from '../../img/Landing/Alianzas/19.jpg';
import k from '../../img/Landing/Alianzas/18.jpg';
import l from '../../img/Landing/Alianzas/17.jpg';
import m from '../../img/Landing/Alianzas/16.jpg';
import n from '../../img/Landing/Alianzas/15.jpg';
import o from '../../img/Landing/Alianzas/14.jpg';
import p from '../../img/Landing/Alianzas/13.jpg';
import q from '../../img/Landing/Alianzas/12.jpg';
import r from '../../img/Landing/Alianzas/11.jpg';
import s from '../../img/Landing/Alianzas/10.jpg';
import t from '../../img/Landing/Alianzas/9.jpg';
// import u from '../../img/Landing/Alianzas/8.jpg';
import v from '../../img/Landing/Alianzas/7.jpg';
// import w from '../../img/Landing/Alianzas/6.jpg';
import x from '../../img/Landing/Alianzas/5.jpg';
import y from '../../img/Landing/Alianzas/4.jpg';
import z from '../../img/Landing/Alianzas/3.jpg';
import ch from '../../img/Landing/Alianzas/2.jpg';
import ll from '../../img/Landing/Alianzas/1.jpg';
import "./styles/activitySectionF.css";

const ActivitySectionF = () => {
  return (
    <Fragment>
      
    <div className="containerActivitySection">
      
        <h1 className='titleActSec'>ACTIVIDAD RECIENTE</h1>
        {""}
        <div className='footerframe'>
        <iframe className='instagram-media-instagram-media-rendered' src="https://www.powr.io/instagram-feed/u/c349a139_1602450916#platform=embed" ></iframe> 
        </div>
  <p className='bottomTextInsta'>hace 5 días en @comida_para_todos_cl </p>
      <div className = 'h2Carrousel'>
        <h1 className='titleActSecs'>NUESTROS COLABORADORES</h1>
        </div>
        <Carousel autoPlay showThumbs={false} infiniteLoop={true}>
        <p className="carousel-status">14 of 29</p>
          <div className='eachColab'>
            <img className='imgActivity' src={a} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={b} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={c} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={d} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={d} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={f} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={g} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={h} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={i} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={j} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={k} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={l} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={m} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={n} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={o} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={p} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={q} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={r} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={s} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={t} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={d} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={v} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={d} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={x} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={y} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={z} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={ch} alt='lata' />
          </div>
          <div className='eachColab'>
            <img className='imgActivity' src={ll} alt='lata' />
          </div>
        </Carousel>
      </div>
    </Fragment>
  );
};

export default ActivitySectionF;
