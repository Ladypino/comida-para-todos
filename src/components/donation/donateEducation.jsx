import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles/donateEducation.css'
import { firebase } from '../../firebase';
import banner from '../../img/Landing/Donar/educacion.jpg'
import MainSelector from "../../modules/MainSelector";


const DonateEducation = () => {
  const { register, errors, handleSubmit } = useForm()
  const [formEducation, setFormEducation] = useState([]);

  const db = firebase.firestore();

  const enviarDatos = (data, event) => {
    setFormEducation([...formEducation, data])
    event.preventDefault();
    event.target.reset();
    db.collection("Educacion").doc(data.nombreCompleto).set({
      data
    })
  }

  return (
    <Fragment>
      <div className='sectionTitleTextEducation'>
        <div className='containerBannerFormEducation'>
          <img src={banner} className='bannerForm' />
        </div>
        <h2 className='marginTopFormEducation'>¿Cómo funciona?</h2>
        <p className='textEducation'>Regalar conocimiento es otorgar herramientas de superación, atrévete a capacitar a beneficiarios de nuestra red.</p>
        <br />
        <h2 className='marginTopFormEducation2'>¿Cómo puedo ayudar?</h2>
        <p className='textEducation'>Piensa en ese tema en que eres experto y cómo podría favorecer a la comunidad, cuéntanos tu disponibilidad y planeemos unas clases.</p>
      </div>
      <form className='formHuertasSectionEducation' onSubmit={handleSubmit(enviarDatos)}>
        <div>
          <p className='titleFormsEducation'>Nombre completo</p>
          <input
            className='inputsFormEducation'
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
          <p className='titleFormsEducation'>Déjanos tu correo</p>
          <input
            className='inputsFormEducation'
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
          <p className='titleFormsEducation'>Número de contacto</p>
          <input
            className='inputsFormEducation'
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
          <p className='titleFormsEducation'>Selecciona tu región</p>
          <select
            className='selectFormEducation'
            name="region"
            ref={
              register({
                required: { value: true, message: 'Ingrese su identificación' }
              })
            }
          >
            <option>Mujer</option>
            <option>Hombre</option>
            <option>Sin género</option>
          </select>
          <span className='erorsText'>
            {errors?.region?.message}
          </span>
        </div>
        <div>
          <p className='titleFormsEducation'>¿En qué comuna te encuentras?</p>
          <select
            className='selectFormEducation'
            name="comuna"
            ref={
              register({
                required: { value: true, message: 'Ingrese su comuna' },
              })
            }
          >
            <option>Springfield</option>
            <option>P.Sherman calle wallabi</option>
          </select>
          <span className='erorsText'>
            {errors?.comuna?.message}
          </span>
        </div>
        <div>
          <p className='titleFormsEducation'>¿En qué te gustaria ofrecer capacitación?</p>
          <input
            className='inputsFormEducation'
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
          <p className='titleFormsEducation'>¿Cuál es tu disponibilidad horaria?</p>
          <input
            className='inputsFormEducation'
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
          <p className='titleFormsEducation'>Coméntanos si requieres materiales para los asistentes, espacio físico desde el cual
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
        <button className='btnEducation' type="submit">ENVIAR FORMULARIO</button>
      </form>
    </Fragment>
  );

}

export default DonateEducation;