import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles/donateTalent.css';
import {firebase} from '../../firebase';
import banner from '../../img/Landing/Donar/talento.jpg'

function DonateTalent() {
  const { register, errors, handleSubmit } = useForm();
  const [formTalent, setFormTalent] = useState([]);
  const db = firebase.firestore();


  const datos = (data, e) => {
    setFormTalent([...formTalent, data]);
    e.preventDefault();
    e.target.reset();
    db.collection("Talento").doc(data.nombreCompleto).set({
      data
    })	
  };

  return (
    <Fragment>
      <div className='sectionTitleText'>
      <div className='containerBannerForm'>
          <img src={banner} className='bannerForm' />
        </div>
        <h2 className='marginTopForm'>¿Cómo funciona?</h2>
        <p className='text'>Cuéntanos a qué te dedicas o cuál es tu pasión, buscaremos la manera de que puedas ejercerlo al servicio de las comunidades que apoyamos.</p>
        <br />
        <h2 className=''>¿Cómo puedo ayudar?</h2>
        <p className='text'>Desde realizar la contabilidad para una pyme, hasta hacer un show de stand-up en un comedor solidario de la red <strong>¡Dinos cuál es tu talento!</strong></p>
      </div>
      <form className='formTalentSection' onSubmit={handleSubmit(datos)}>
        <div>
          <p className='titleForms'>Nombre completo</p>
          <input placeholder='Ej. Juan Perez Abarca'
            className='inputsFormTalent'
            name='nombreCompleto'
            ref={
              register({
                required: {
                  value: true,
                  message: 'Ingrese su nombre'
                }
              })
            }
          />
          <span className='erorsText'>
            {errors?.nombreCompleto?.message}
          </span>
        </div>
        <div>
          <p className='titleForms'>Selecciona tu región</p>
          <select name='region'
            className='selectFormTalent'
            ref={
              register({
                required: {
                  value: true,
                  message: 'Ingrese su identificación'
                }
              })
            }>
            <option>Mujer</option>
            <option>Hombre</option>
            <option>Sin género</option>
          </select>
          <span className='erorsText'>
            {errors?.region?.message}
          </span>
        </div>
        <div>
          <p className='titleForms'>Déjanos tu correo</p>
          <input placeholder='Ej. juanpereza@gmail.com'
            className='inputsFormTalent'
            name='correo'
            ref={
              register({
                required: {
                  value: true,
                  message: 'Ingrese su correo electrónico'
                }
              })}
          />
          <span className='erorsText'>
            {errors?.correo?.message}
          </span>
        </div>
        <div>
          <p className='titleForms'>Número de contacto</p>
          <input placeholder='+569 XXXX XXXX'
            className='inputsFormTalent'
            name='numeroTelefonico'
            ref={
              register({
                required: {
                  value: true,
                  message: 'Ingrese su número telefónico'
                },
                maxLength: {
                  value: 12,
                  message: 'Ingrese un número válido'
                },
                minLength: {
                  value: 12,
                  message: 'Ingrese un número válido'
                }
              })
            } />
          <span className='erorsText'>
            {errors?.numerotelefonico?.message}
          </span>
        </div>
        <div>
          <p className='titleForms'>¿En qué comuna te encuentras?</p>
          <select className='selectFormTalent'
            name='comuna'
            ref={
              register({
                required: {
                  value: true,
                  message: 'Ingrese su comuna'
                },
              })
            }>
            <option>Springfield</option>
            <option>P.Sherman calle wallabi</option>
          </select>
          <span className='erorsText'>
            {errors?.comuna?.message}
          </span>
        </div>
        <div>
          <p className='titleForms'>¿Qué talento te gustaría ejercer en pos de nuestros beneficiarios?</p>
          <textarea
            placeholder='Ej. Soy diseñador y me gustaría desarrollar logos para los emprendedores de la red'
            className='inputTextFormTalent'
            name='talento'
            ref={register} />
        </div>
        <div>
          <p className='titleForms'>¿Cúal es tu disponibilidad horaria?</p>
          <input type='text'
            placeholder='Ej. Lunes y Miércoles desde las 16hrs'
            className='inputsFormTalent'
            name='horario'
            ref={register} />
        </div>
        <div>
          <p className='titleForms'>Coméntanos cualquier detalle que consideres necesario</p>
          <textarea
            placeholder='Ej. Necesitaré conversar con los emprendedores para crear un logo acorde a su negocio'
            className='inputTextFormTalent'
            name='detalle'
            ref={register} />
        </div>
        <button className='btnSubmitForm' type="submit">ENVIAR FORMULARIO</button>
      </form>
    </Fragment>
  );
}

export default DonateTalent;