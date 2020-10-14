import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles/donateHuertas.css'
import { firebase } from '../../firebase';
import banner from '../../img/Landing/Donar/educacion.jpg'


const Donate = () => {
  const { register, errors, handleSubmit } = useForm()
  const [form, setForm] = useState([]);

  const db = firebase.firestore();

  const enviarDatos = (data, event) => {
    setForm([...form, data])
    event.preventDefault();
    event.target.reset();
    db.collection("Educacion").doc(data.nombreCompleto).set({
      data
    })
  }

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
          <p className='text'>Regalar conocimiento es otorgar herramientas de superación, atrévete a capacitar a beneficiarios de nuestra red.</p>
          <br />
          <h2 className='marginTopForm2'>¿Cómo puedo ayudar?</h2>
          <p className='text'>Piensa en ese tema en que eres experto y cómo podría favorecer a la comunidad, cuéntanos tu disponibilidad y <strong>planeemos unas clases</strong>.</p>
        </div>
        <form className='formHuertasSection' onSubmit={handleSubmit(enviarDatos)}>
          <div>
            <p className='titleForms'>Nombre completo</p>
            <input
              className='inputsFormHuertas'
              name="nombreCompleto"
              ref={
                register({
                  required: { value: true, message: 'Ingrese su nombre' }
                })
              }
              placeholder="Ej. Juan Pérez Abarca"
            />
            <span className='erorsText'>
              {errors?.nombreCompleto?.message}
            </span>
          </div>
          <div>
            <p className='titleForms'>Déjanos tu correo</p>
            <input
              className='inputsFormHuertas'
              name="correo"
              type="email"
              ref={
                register({
                  required: { value: true, message: 'Ingrese su correo electronico' }
                })
              }
              placeholder="Ej. juanperez@mail.com"
            />
            <span className='erorsText'>
              {errors?.correo?.message}
            </span>
          </div>
          <div>
            <p className='titleForms'>Número de contacto</p>
            <input
              className='inputsFormHuertas'
              name="numeroTelefonico"
              ref={
                register({
                  required: { value: true, message: 'Ingrese su número telefónico' },
                  maxLength: { value: 12, message: 'Ingrese un número válido' },
                  minLength: { value: 12, message: 'Ingrese un número válido' },
                })
              }
              placeholder="+569XXXXXXXX"
            />
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
            <p className='titleForms'>¿En qué te gustaria ofrecer capacitación?</p>
            <input
              className='inputsFormHuertas'
              name="capacitacion"
              ref={
                register({
                  required: { value: true, message: 'Ingrese capacitación a realizar' },
                })
              }
              placeholder="Ej. Quiero enseñar sobre finanzas personales"
            />
            <span className='erorsText'>
              {errors?.capacitacion?.message}
            </span>
          </div>
          <div>
            <p className='titleForms'>¿Cuál es tu disponibilidad horaria?</p>
            <input
              className='inputsFormHuertas'
              name="horario"
              ref={
                register({
                  required: { value: true, message: 'Ingrese su disponibilidad horaria' },
                })
              }
              placeholder="Ej. Lunes y miércoles después de las 16 hrs"
            />
            <span className='erorsText'>
              {errors?.horario?.message}
            </span>
          </div>
          <div>
            <p className='titleForms'>Coméntanos si requieres materiales para los asistentes, espacio físico desde el cual
          capacitar u otros detalles importantes</p>
            <textarea
              className='textareaSection'
              name="detalle"
              ref={
                register({
                  required: { value: true, message: 'Ingresa los detalles' },
                })
              }
              placeholder="Ej. Sería ideal que cada asistente tuviera una calculadora o algo para tomar apuntes"
            />
            <span className='erorsText'>
              {errors?.detalle?.message}
            </span>
          </div>
          <button className='btnSubmitForm' type="submit">ENVIAR FORMULARIO</button>
        </form>
      </div>
    </Fragment>
  );

}

export default Donate;