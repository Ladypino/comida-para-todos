import React from 'react';
import logo from '../../img/logo.png';
import './styles/headerIntra.css'
import IconBurgerToggleIntranet from './iconBurguerToggleIntranet'

const HeaderIntranet = () => {
    return (
      <header className='header'>
        <div className='containerLogoHome'>
            <img src={logo} alt="logo" className='logoHome' />
        </div>
        <IconBurgerToggleIntranet />
      </header>
    )
  }
  
  export default HeaderIntranet; 