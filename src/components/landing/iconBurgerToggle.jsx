import React, {useState} from 'react';
import './styles/iconBurgerToggle.css';
import BurguerToggle from './burgerToggle';

function IconBurgerToggle() {
  let [ burgerOn, setBurgerOn ]= useState(false);
    
  return (
    <div>
      <span className='iconBurgerToggle' onClick={()=>setBurgerOn(!burgerOn)}>&#9776;</span>
      <BurguerToggle burgerOn={burgerOn} setBurgerOn={setBurgerOn}/>
    </div>
  );
}

export default IconBurgerToggle;
