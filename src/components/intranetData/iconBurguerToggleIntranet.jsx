import React, {useState} from 'react';
// import './styles/iconBurgerToggle.css';
import BurguerToggleIntranet from './burguerToggleIntranet';

function IconBurgerToggle() {
  let [ burgerOn, setBurgerOn ]= useState(false);
    
  return (
    <div>
      <span className='iconBurgerToggle' onClick={()=>setBurgerOn(!burgerOn)}>&#9776;</span>
      <BurguerToggleIntranet burgerOn={burgerOn}/>
    </div>
  );
}

export default IconBurgerToggle;
