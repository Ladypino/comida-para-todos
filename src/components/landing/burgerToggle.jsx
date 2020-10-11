import React from 'react';
import { Link } from 'react-router-dom';
import './styles/burguerToggle.css';

const BurguerToggle = (props) => {
  const classToogle = props.burgerOn === true ? 'toggleVisible' : 'toggleHidden'
  return (
    <div className='containerBurguerToggle'>
      <div className={classToogle}>
        <Link to="/Nosotros" className='oli'>
          <div className='boxSection'>
            <p className='textBurgerToggle'>Quiénes somos</p>
          </div>
        </Link>
        <Link to="/Nosotros" className='oli'>
          <div className='boxSection'>
            <p className='textBurgerToggle'>Qué hacemos</p>
          </div>
        </Link>
        <Link to="/Nosotros" className='oli'>
          <div className='boxSection'>
            <p className='textBurgerToggle'>Transparencia</p>
          </div>
        </Link>
        <Link to="/Donaciones" className='oli'>
          <div className='boxSection'>
            <p className='textBurgerToggle'>Haz tu donación</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BurguerToggle;


