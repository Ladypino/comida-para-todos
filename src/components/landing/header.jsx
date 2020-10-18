import React from 'react';
import logox from '../../img/logo.png'
import './styles/header.css';
import IconBurgerToggle from './iconBurgerToggle';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='containerLogoHome'>
        <Link to='/' exact>
          <img src={logox} alt="" className='logoHome' />
        </Link>
      </div>
      <IconBurgerToggle />
    </header>
  )
}

export default Header; 
