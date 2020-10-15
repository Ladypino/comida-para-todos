import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles/donateHuertas.css'
import { firebase } from '../../firebase';
import banner from '../../img/Landing/Donar/talento.jpg'

function DonateTalent() {
  const { register, errors, handleSubmit } = useForm();
  const [formTalent, setFormTalent] = useState([]);
  const db = firebase.firestore();

  const currentDate = () => {
    let date = new Date();
    const day = date.getDate();
    const month = (date.getMonth() < 9 ? "0" : "") + (date.getMonth() + 1);
    const year = date.getFullYear();
    date = `${day}/${month}/${year}`;
    return date;
  };

  const datos = (data, e) => {
    setFormTalent([...formTalent, data]);
    e.preventDefault();
    e.target.reset();
    db.collection("Talento").doc(data.nombreCompleto).set({
      nombreCompleto: data.nombreCompleto,
      correo: data.correo,
      numeroTelefonico: data.numeroTelefonico,
      region:data.region,
      comuna: data.comuna,
      fecha: currentDate(),
      talento: data.talento,
      horario: data.horario,
      detalle: data.detalle,
    })
  };

  return (
    <Fragment>
      <div className='sectionTitleText'>
        <div className='containerBannerForm'>
          <img src={banner} alt="" className='bannerForm' />
        </div>
      </div>
      <div className="containerTextForm">
        <div className='textContainerOficial'>
          <h2 className='marginTopForm'>¿Cómo funciona?</h2>
          <p className='text'>Cuéntanos a qué te dedicas o cuál es tu pasión, buscaremos la manera de que puedas ejercerlo al servicio de las comunidades que apoyamos.</p>
          <br />
          <h2 className='marginTopForm2'>¿Cómo puedo ayudar?</h2>
          <p className='text'>Desde realizar la contabilidad para una pyme, hasta hacer un show de stand-up en un comedor solidario de la red <strong>¡Dinos cuál es tu talento!</strong></p>
        </div>
        <form className='formHuertasSection' onSubmit={handleSubmit(datos)}>
          <div>
            <p className='titleForms'>Nombre completo</p>
            <input placeholder='Ej. Juan Perez Abarca'
              className='inputsFormHuertas'
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
            <p className='titleForms'>Déjanos tu correo</p>
            <input placeholder='Ej. juanpereza@gmail.com'
              className='inputsFormHuertas'
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
              className='inputsFormHuertas'
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
              {errors?.numeroTelefonico?.message}
            </span>
          </div>
          <div>
            <p className='titleForms'>Selecciona tu región</p>
            <select
              className='selectFormHuertas'
              name="region"
              ref={
                register({
                  required: { value: true, message: 'Ingrese su region' }
                })
              }
            >
              <option>I Región de Tarapacá</option>
              <option>II Región de Antofagasta</option>
              <option>III Región de Atacama</option>
              <option>IV Región de Coquimbo</option>
              <option>V Región de Valparaíso</option>
              <option>VI Región del Libertador General Bernardo O’Higgins</option>
              <option>VII Región del Maule</option>
              <option>VIII Región del Biobío</option>
              <option>IX Región de La Araucanía</option>
              <option>X Región de Los Lagos</option>
              <option>XI Región Aysén del General Carlos Ibáñez del Campo</option>
              <option>XII Región de Magallanes y Antártica Chilena</option>
              <option selected>Región Metropolitana de Santiago</option>
              <option>XIV Región de Los Ríos</option>
              <option>XV Región de Arica y Parinacota</option>
              <option>XVI Región de Ñuble</option>
            </select>
            <span className='erorsText'>
              {errors?.region?.message}
            </span>
          </div>
          <div>
            <p className='titleForms'>¿En qué comuna te encuentras?</p>
            <input
              className='inputsFormHuertas'
              name="comuna"
              ref={
                register({
                  required: { value: true, message: 'Ingrese comuna' },
                })
              }
              placeholder="Ingrese su comuna"
            />
            <span className='erorsText'>
              {errors?.comuna?.message}
            </span>
          </div>
          <div>
            <p className='titleForms'>¿Qué talento te gustaría ejercer en pos de nuestros beneficiarios?</p>
            <textarea
              placeholder='Ej. Soy diseñador y me gustaría desarrollar logos para los emprendedores de la red'
              className='textareaSection'
              name='talento'
              ref={
                register({
                  required: {
                    value: true,
                    message: 'Ingrese su talento'
                  }
                })
              }
            />
            <span className='erorsText'>
              {errors?.talento?.message}
            </span>
          </div>
          <div>
            <p className='titleForms'>¿Cúal es tu disponibilidad horaria?</p>
            <input type='text'
              placeholder='Ej. Lunes y Miércoles desde las 16hrs'
              className='inputsFormHuertas'
              name='horario'
              ref={
                register({
                  required: {
                    value: true,
                    message: 'Ingrese su disponabilidad horaria'
                  }
                })
              }
            />
            <span className='erorsText'>
              {errors?.horario?.message}
            </span>
          </div>
          <div>
            <p className='titleForms'>Coméntanos cualquier detalle que consideres necesario</p>
            <textarea
              placeholder='Ej. Necesitaré conversar con los emprendedores para crear un logo acorde a su negocio'
              className='textareaSection'
              name='detalle'
              ref={
                register({
                  required: {
                    value: true,
                    message: 'Ingrese los detalles'
                  }
                })
              }
            />
            <span className='erorsText'>
              {errors?.detalle?.message}
            </span>
          </div>
          <button className='btnSubmitForm' type="submit">ENVIAR FORMULARIO</button>
        </form>
      </div>
    </Fragment >
  );
}

export default DonateTalent;