import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import almuerzos from '../../img/Landing/Donar/almuerzo.jpg';
import despensa from '../../img/Landing/Donar/despensa.jpg';
import talento from '../../img/Landing/Donar/talento.jpg';
import educacion from '../../img/Landing/Donar/educacion.jpg';
import huertas from '../../img/Landing/Donar/huertas.jpg';
import './styles/donateSection.css';
import { ShowContext } from '../../App';

function DonateSection() {

  const scrollForm = window.screen.width<1024? 390 : 780;

  // me traigo valores del contexto
  const { formToShow, positionScrollForm } = useContext(ShowContext);

  // le doy un valor a los estados de cada objeto
  const [formToShowValue, setFormToShowValue] = formToShow;
  const [positionScrollFormValue, setPositionScrollFormValue] = positionScrollForm;

  return (
    <div className='donateSectionPage'>
      <div className='textDonateSectionPage'>
        <p className='titledonatesection'>Garantizar comida para todos,<strong> es un esfuerzo de equipo.</strong> </p>
        <Link to="/Donaciones" >
          <button className="btnDonation">HAZTE PARTE</button>
        </Link>
      </div>
      <div className="containerDonateSectionBackgroundOficial">
        <div className="containerDonateSectionBackground">
          <div className='containerMoreText'>
            <h1 className='titleLanding'>¡Descubre cómo puedes ayudar!</h1>
            <p className='moretext'>Con tu ayuda<strong> podemos reactivar</strong> a pequeños productores, restaurantes y transportes para entregar <strong>almuerzos nutritivos</strong> a comedores solidarios y <strong>fortalecer a sus comunidades.</strong></p>
          </div>
          <div class='btnsContainer'>
            <div className='singleContainerDonate'>
              <Link to="/Donaciones" classNameonClick={() => { setPositionScrollFormValue(0) }}>
                <img className='imgDonate' src={almuerzos} alt='almuerzos' />
                <div className='textBtnDonate'>Almuerzos</div>
                <div className='iconPlusDonate'>
                  <p className='donateIcon'>&#43;</p>
                </div>
              </Link>
            </div>
            <div className='containerDonates'>
              <div className='eachDonateContainer'>
                <Link to="/Donaciones" onClick={() => { setFormToShowValue('Food'); setPositionScrollFormValue(scrollForm) }}>
                  <img className='imgDonate' src={despensa} alt='despensa' />
                  <div className='textBtnDonates'>Despensa</div>
                  <div className='iconPlusDonate'>
                    <p className='donateIcon'>&#43;</p>
                  </div>
                </Link>
              </div>
              <div className='eachDonateContainer'>
                <Link to="/Donaciones" onClick={() => { setFormToShowValue('Talent'); setPositionScrollFormValue(scrollForm) }}>
                  <img className='imgDonate' src={talento} alt='talento' />
                  <div className='textBtnDonates'>Talento</div>
                  <div className='iconPlusDonate'>
                    <p className='donateIcon'>&#43;</p>
                  </div>
                </Link>
              </div>
              <div className='eachDonateContainer'>
                <Link to="/Donaciones" onClick={() => { setFormToShowValue('Education'); setPositionScrollFormValue(scrollForm) }}>
                  <img className='imgDonate' src={educacion} alt='educacion' />
                  <div className='textBtnDonates'>Educación</div>
                  <div className='iconPlusDonate'>
                    <p className='donateIcon'>&#43;</p>
                  </div>
                </Link>
              </div>
              <div className='eachDonateContainer'>
                <Link to="/Donaciones" onClick={() => { setFormToShowValue('Huertas'); setPositionScrollFormValue(scrollForm)}}>
                  <img className='imgDonate' src={huertas} alt='huertas' />
                  <div className='textBtnDonates'>Huertas</div>
                  <div className='iconPlusDonate'>
                    <p className='donateIcon'>&#43;</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='btnSectionPage'>
          <Link to="/Donaciones" onClick={() => { setPositionScrollFormValue(0) }}>
            <div className='btnSectionMargin'>
              <button className="btnDonations">COMO AYUDAR</button>
            </div>
          </Link>
        </div>
      </div >
    </div>
  );
}

export default DonateSection;