import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
// import './styles/donateHuertas.css'
import { firebase } from '../../firebase';
import banner from '../../img/Landing/Donar/educacion.jpg'

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
      <div className='sectionTitleText'>
        <div className='containerBannerForm'>
          <img src={banner} className='bannerForm' />
        </div>
        <h2 className='marginTopForm'>¿Cómo funciona?</h2>
        <p className='text'>Regalar conocimiento es otorgar herramientas de superación, atrévete a capacitar a beneficiarios de nuestra red.</p>
        <br />
        <h2>¿Cómo puedo ayudar?</h2>
        <p className='text'>Piensa en ese tema en que eres experto y cómo podría favorecer a la comunidad, cuéntanos tu disponibilidad y planeemos unas clases.</p>
      </div>
      <form className='formHuertasSection' onSubmit={handleSubmit(enviarDatos)}>
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
        <div>
          <p className='titleForms'>Selecciona tu región</p>
          <select
            className='selectFormHuertas'
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
        </div>
        <span className='erorsText'>
          {errors?.correo?.message}
        </span>
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
          <p className='titleForms'>¿En qué comuna te encuentras?</p>
          <select
            className='selectFormHuertas'
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

    </Fragment>
  );

}

export default DonateEducation;