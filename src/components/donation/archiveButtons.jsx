import React, { useContext, useEffect } from 'react';
import DonateEducation from './donateEducation';
import DonateHuertas from './donateHuertas';
import DonateTalent from './donateTalent';
import DonateFood from './donateFood';
import { ShowContext } from '../../App'
import './styles/archiveButtons.css';
import { animateScroll as scroll } from 'react-scroll';


function ArchiveButtons() {

  const scrollForm = window.screen.width < 1024 ? 390 : 780;

  // me traigo valores del contexto
  const { formToShow, positionScrollForm } = useContext(ShowContext);

  // le doy un valor a los estados de cada objeto
  const [formToShowValue, setFormToShowValue] = formToShow;
  const [positionScrollFormValue, setPositionScrollFormValue] = positionScrollForm;

  useEffect(() => {
    scroll.scrollTo(positionScrollFormValue)
  }
  )

  const classButtonArchiveHuerta = formToShowValue === 'Huertas' ? 'archiveBtnOn' : 'archiveBtnOff';
  const classButtonArchiveTalent = formToShowValue === 'Talent' ? 'archiveBtnOn' : 'archiveBtnOff';
  const classButtonArchiveFood = formToShowValue === 'Food' ? 'archiveBtnOn' : 'archiveBtnOff';
  const classButtonArchiveEducation = formToShowValue === 'Education' ? 'archiveBtnOn' : 'archiveBtnOff';

  let form = '';

  if (formToShowValue === 'Huertas') form = <DonateHuertas />
  if (formToShowValue === 'Talent') form = <DonateTalent />
  if (formToShowValue === 'Food') form = <DonateFood />
  if (formToShowValue === 'Education') form = <DonateEducation />

  return (
    <div className='containerSectionArchiveBtnAndDonateForms'>
      <div className='sectionArchiveButtons'>
        <button className={classButtonArchiveHuerta}
          onClick={() => {
            setFormToShowValue('Huertas');
            setPositionScrollFormValue(scrollForm);
          }}>Huertas</button>
        <button className={classButtonArchiveTalent}
          onClick={() => {
            setFormToShowValue('Talent');
            setPositionScrollFormValue(scrollForm)
          }}>Talento</button>
        <button className={classButtonArchiveFood} onClick={() => {
          setFormToShowValue('Food');
          setPositionScrollFormValue(scrollForm)
        }}>Despensa</button>
        <button className={classButtonArchiveEducation} onClick={() => {
          setFormToShowValue('Education');
          setPositionScrollFormValue(scrollForm);
        }}>Educación</button>
      </div>
      {form}
    </div>
  );
}

export default ArchiveButtons;