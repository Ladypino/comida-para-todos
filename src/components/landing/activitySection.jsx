import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../aboutUs/styles/galeryPhoto.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import a from "../../img/Landing/Alianzas/28.jpg";
import b from "../../img/Landing/Alianzas/27.jpg";
import c from "../../img/Landing/Alianzas/26.jpg";
import d from "../../img/Landing/Alianzas/25.jpg";
import e from "../../img/Landing/Alianzas/24.png";
import f from "../../img/Landing/Alianzas/23.jpg";
import g from "../../img/Landing/Alianzas/22.jpg";
import h from "../../img/Landing/Alianzas/21.jpg";
import i from "../../img/Landing/Alianzas/20.jpg";
import j from "../../img/Landing/Alianzas/19.jpg";
import k from "../../img/Landing/Alianzas/18.jpg";
import l from "../../img/Landing/Alianzas/17.jpg";
import m from "../../img/Landing/Alianzas/16.jpg";
import n from "../../img/Landing/Alianzas/15.jpg";
import o from "../../img/Landing/Alianzas/14.jpg";
import p from "../../img/Landing/Alianzas/13.jpg";
import q from "../../img/Landing/Alianzas/12.jpg";
import r from "../../img/Landing/Alianzas/11.jpg";
import s from "../../img/Landing/Alianzas/10.jpg";
import t from "../../img/Landing/Alianzas/9.jpg";
import u from "../../img/Landing/Alianzas/8.png";
import v from "../../img/Landing/Alianzas/7.jpg";
import w from "../../img/Landing/Alianzas/6.png";
import x from "../../img/Landing/Alianzas/5.jpg";
import y from "../../img/Landing/Alianzas/4.jpg";
import z from "../../img/Landing/Alianzas/3.jpg";
import ch from "../../img/Landing/Alianzas/2.jpg";
import ll from "../../img/Landing/Alianzas/1.jpg";
import "./styles/activitySectionF.css";

const ActivitySectionF = () => {
  const responsive = {
    0: { items: 1 },
    360: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <div className="item">
      <img className="imgActivity" src={a} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={b} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={c} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={d} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={e} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={f} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={g} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={h} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={i} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={j} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={k} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={l} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={m} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={n} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={o} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={p} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={q} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={r} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={s} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={t} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={u} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={v} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={w} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={x} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={y} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={z} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={ch} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={ll} alt="lata" />
    </div>,
    <div className="item">
      <img className="imgActivity" src={ll} alt="lata" />
    </div>,
  ];
  return (
    <div className="containerActivitySection">
      <h1 className="titleActSec">ACTIVIDAD RECIENTE</h1>
      {""}
      <div className="footerframe">
        
        {/* PARA PC <div class="powr-instagram-feed" id="f8dded9d_1602728312"></div><script src="https://www.powr.io/powr.js?platform=html"></script> */}
        {/* PARA CELULAR<iframe class="instagram-media-instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CGN_2tcHIk4/embed/?cr=1&amp;v=12&amp;wp=746&amp;rd=http%3A%2F%2Flocalhost%3A3000&amp;rp=%2FDonaciones#%7B%22ci%22%3A0%2C%22os%22%3A1508.6749999900348%2C%22ls%22%3A665.4649999982212%2C%22le%22%3A667.650000017602%7D ;"></iframe>   */}
      </div>
      <p className="bottomTextInsta">hace 5 días en @comida_para_todos_cl </p>
      <div className="h2Carrousel">
        <h1 className="titleActSecs">NUESTROS COLABORADORES</h1>
      </div>
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
  );
};

export default ActivitySectionF;
