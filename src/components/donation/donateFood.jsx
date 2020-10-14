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
					<img src={banner} className='bannerForm' />
				</div>
				<h2 className='marginTopFormFood'>¿Cómo funciona?</h2>
				<p className='textFood'>Nos juntamos con Empresas Amigas que tienen servicios de delivery a tu hogar, para poder aprovechar su transporte y rescatar alimentos que puedan perderse en tu despensa.</p>
				<h2 className='marginTopFormFood2'>¿Cómo puedo ayudar?</h2>
				<p className='textFood'>Con tu número de pedido en Empresas Amigas, puedes inscribir alimentos para donar y que éstos sean recogidos cuando lleven tu envío.</p>
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
					<p className='errorsText'>Número de contacto</p>
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
					<select className='selectFormFood'
						name="region"
						ref={
							register({
								required: { value: true, message: 'Ingrese su región' }
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
					<p className='titleFormsFood'>¿En qué comuna te encuentras?</p>
					<select className='selectFormFood'
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
				<div className='textandCheckboxFood'>
					<p className='titleFormsCheckboxFood'><input
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
<<<<<<< HEAD
				<p className='titleFormsCheckbox'>¿Con qué Empresa Amiga agendaste tu pedido?</p>
					<select className='select'
=======
					<p className='titleFormsCheckboxFood'>¿Con qué Empresa Amiga agendaste tu pedido?</p>
					<select className='selectFormFood'
>>>>>>> 70f0dae5c5c2fe77bdec304ae303038b891e7a2c
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
					<p className='titleFormsCheckbox'>Describe los alimentos y cantidades a donar para asegurarles un lugar dentro del transporte</p>
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