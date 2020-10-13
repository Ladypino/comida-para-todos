import React from 'react';
// import './styles/burguerToggle.css';

const BurguerToggleIntranet = (props) => {

  const classToogle = props.burgerOn === true ? 'toggleVisible' : 'toggleHidden'

  return (
    <div className='containerBurguerToggle'>
      <div className={classToogle}>
        <div className='boxSection'>
          <p className='textBurgerToggle'>Cerrar sesión</p>
        </div>
      </div>
    </div>
  );
}

export default BurguerToggleIntranet;


