import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles/donateFood.css';
import { firebase } from '../../firebase';
import banner from '../../img/Landing/Donar/despensa.jpg'


function DonateFood() {
	const db = firebase.firestore()
	const { register, errors, handleSubmit } = useForm();

	const [formFood, setFormFood] = useState([]);

	const enviarDatos = (data, event) => {
		setFormFood([...formFood, data])
		event.preventDefault();
		event.target.reset();
		console.log(data)
		db.collection("Despensa").doc(data.nombreCompleto).set({ data })
	};

	return (
		<Fragment>
			<div className='sectionTitleTextFood'>
				<div className='containerBannerFormFood'>
					<img src={banner} alt="" className='bannerForm' />
				</div>
				<h2 className='marginTopFormFood'>¿Cómo funciona?</h2>
				<p className='textFood'>Nos juntamos con Empresas Amigas que tienen servicios de delivery a tu hogar, para poder aprovechar su transporte y rescatar alimentos que puedan perderse en tu despensa.</p>
				<h2 className='marginTopFormFood2'>¿Cómo puedo ayudar?</h2>
				<p className='textFood'>Con tu número de pedido en Empresas Amigas, puedes <strong>inscribir alimentos para donar</strong> y que éstos sean recogidos cuando lleven tu envío.</p>
			</div>
			<form className='formHuertasSectionFood' onSubmit={handleSubmit(enviarDatos)}>
				<div>
					<p className='titleFormsFood'>Nombre completo</p>
					<input className='inputsFormFood'
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
					<p className='titleFormsFood'>Déjanos tu correo</p>
					<input className='inputsFormFood'
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
					<br/>
					<p className='errorsText'>Número de contacto</p>
					<br/>
					<input className='inputsFormFood'
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
		  <p className='titleFormsFood'>Selecciona tu región</p>
          <select
			className='selectFormFood
			'
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
		  <p className='titleFormsFood
		  '>¿En qué comuna te encuentras?</p>
          <input
			className='inputsFormFood
			'
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
				<div className='textandCheckboxFood'>
					<p className='titleFormsCheckboxFood'><input  className='formCheckbox'
						name="helpFood"
						type="checkbox"
						value={true}
						ref={register}
					/> Quiero hacer una colecta en mi comunidad y trasladar los alimentos </p>
					<p className='titleFormsCheckboxFood'><input className='formCheckbox'
						name="DonarFood"
						type="checkbox"
						value={true}
						ref={register}
					/> Quiero donar alimentos para ser trasladados por Empresas Amigas </p>
				</div>
				<div>
					<p className='titleFormsFood'>¿Con qué Empresa Amiga agendaste tu pedido?</p>
					<select className='selectFormFood'
						name="empresa"
						ref={
							register({
								required: { value: true, message: 'Ingrese la empresa' },
							})
						}
					>
						<option>Restaurant Don Gollo</option>
						<option>Repartos Willy Wonka</option>
					</select>
					<span className='erorsText'>
						{errors?.empresa?.message}
					</span>
				</div>
				<div>
					<p className='titleFormsCheckbox'>Ingresa tu número de pedido </p>
					<input className='inputsFormFood'
						name="numeroPedido"
						ref={
							register({
								required: { value: true, message: 'Ingrese numero de pedido' },
							})
						}
						placeholder="Ej #00123456"
					/>
					<span className='erorsText'>
						{errors?.numeroPedido?.message}
					</span>
				</div>
				<div>
					<p className='titleFormsFood'>Describe los alimentos y cantidades a donar para asegurarles un lugar dentro del transporte</p>
					<input className='textareaSection'
						name="detalle"
						ref={
							register({
								required: { value: true, message: 'Ingresa los detalles' },
							})
						}
						placeholder="Ej. 2 kilos de papas, 3 paquetes de fideos, 2 lechugas costinas."
					/>
					<span className='erorsText'>
						{errors?.detalle?.message}
					</span>
				</div>
				<button className='btnFood' type="submit">ENVIAR FORMULARIO</button>
			</form>
		</Fragment>
	);
}

export default DonateFood;