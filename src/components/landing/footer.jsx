import React from 'react';
import './styles/footer.css';
import logo from '../../img/logo.png'
import Ig from '../../img/Footer/insta.png';
import maps from '../../img/Footer/maps.png';
import Mail from '../../img/Footer/mail.png';
import { Link } from 'react-router-dom';
import Lan from '../../img/Footer/lan.png';


function Footer() {
  return (
    <footer>
      <div className='containerLogoFooter'>
        <img src={logo} alt="" className='logoFooter' />
      </div>
      <div className='containerIconsTextFooter'>
        <div className='containerEachContact'>
          <a className='linkExterno' href='https://www.instagram.com/comida_para_todos_cl/' target='_blanck'>
            <img src={Ig} alt="instaicon" className='iconFooter' />
            <p className='textFooter'>@comidaparatodos</p>
          </a>
        </div>
        <div className='containerEachContact'>
          <a className='linkExterno' href='https://mail.google.com/mail/?view=cm&fs=1&to=hola@comidaparatodos.cl' target='_blanck'>
            <img src={Mail} alt="mailIcon" className='iconFooter' />
            <p className='textFooter'>hola@comidaparatodos.cl</p>
          </a>
        </div>
        <div className='containerEachContact'>
          <a className='linkExterno' href='https://goo.gl/maps/Lj7toJ6oe7wzU2jd9' target='_blanck'>
            <img src={maps} alt="mailIcon" className='iconFooter' />
            <p className='textFooter'>Av. Condell #566, Santiago</p>
          </a>
        </div>
        <Link className='linkExterno2' to="/Intranet">
          <div className='containerEachContact'>
            <img src={Lan} alt="intraIcon" className='iconFooter' />
            <p className='textFooter'>Intranet</p>
          </div>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;