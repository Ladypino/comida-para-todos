import React from 'react';
import { Link } from 'react-router-dom';
import './styles/burguerToggle.css';
import { animateScroll as scroll } from 'react-scroll';

const BurguerToggle = (props) => {
  const scrollQueHacemos= window.screen.width<1024 ? 1620 : 1580;
  const scrollTransparencia= window.screen.width<1024 ? 3000 : 2720;

  const classToogle = props.burgerOn === true ? 'toggleVisible' : 'toggleHidden'

  return (
    <div className='containerBurguerToggle'>
      <div className={classToogle}>
        <Link to="/Nosotros" className='oli'>
          <div className='boxSection'>
            <p className='textBurgerToggle'
              onClick={() => {
                scroll.scrollTo(0);
                props.setBurgerOn(!props.burgerOn)
              }}>Quiénes somos</p>
          </div>
        </Link>
        <Link to="/Nosotros" className='oli'>
          <div className='boxSection'
            onClick={() => {
              scroll.scrollTo(scrollQueHacemos);
              props.setBurgerOn(!props.burgerOn)
            }}>
            <p className='textBurgerToggle'>Qué hacemos</p>
          </div>
        </Link>
        <Link to="/Nosotros" className='oli'>
          <div className='boxSection'
            onClick={() => {
              scroll.scrollTo(scrollTransparencia);
              props.setBurgerOn(!props.burgerOn)
            }}>
            <p className='textBurgerToggle'>Transparencia</p>
          </div>
        </Link>
        <Link to="/Donaciones" className='oli'>
          <div className='boxSection'>
            <p className='textBurgerToggle'
              onClick={() => {
                scroll.scrollTo(0)
                props.setBurgerOn(!props.burgerOn)
              }}>Haz tu donación</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BurguerToggle;


