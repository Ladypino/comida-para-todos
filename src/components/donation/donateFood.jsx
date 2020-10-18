import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles/donateHuertas.css'
import { firebase } from '../../firebase';
import banner from '../../img/Landing/Donar/despensa.jpg'


function Donate() {
	const db = firebase.firestore()
	const { register, errors, handleSubmit } = useForm();

	const [form, setForm] = useState([]);

	const currentDate = () => {
		let date = new Date();
		const day = date.getDate();
		const month = (date.getMonth() < 9 ? "0" : "") + (date.getMonth() + 1);
		const year = date.getFullYear();
		date = `${day}/${month}/${year}`;
		return date;
	};

	const enviarDatos = (data, event) => {
		setForm([...form, data])
		event.preventDefault();
		event.target.reset();
		console.log(data)
		db.collection("Despensa").doc(data.nombreCompleto).set({
			nombreCompleto: data.nombreCompleto,
			correo: data.correo,
			numeroTelefonico: data.numeroTelefonico,
			region: data.region,
			comuna: data.comuna,
			fecha: currentDate(),
			helpFood: data.helpFood,
			donarFood: data.donarFood,
			empresa: data.empresa,
			numeroPedido: data.numeroPedido,
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
					<p className='text'>Nos juntamos con Empresas Amigas que tienen servicios de delivery a tu hogar, para poder aprovechar su transporte y rescatar alimentos que puedan perderse en tu despensa.</p>
					<h2 className='marginTopForm2'>¿Cómo puedo ayudar?</h2>
					<p className='text'>Con tu número de pedido en Empresas Amigas, puedes <strong>inscribir alimentos para donar</strong> y que éstos sean recogidos cuando lleven tu envío.</p>
				</div>
				<form className='formHuertasSection' onSubmit={handleSubmit(enviarDatos)}>
					<div className='containerEachQuestion'>
						<p className='titleForms'>Nombre completo</p>
						<input className='inputsFormHuertas'
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
					</div >
					<div className='containerEachQuestion'>
						<p className='titleForms'>Déjanos tu correo</p>
						<input className='inputsFormHuertas'
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
					<div className='containerEachQuestion'>
						<br />
						<p className='titleForms'>Número de contacto</p>
						<input className='inputsFormHuertas'
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
					<div className='containerEachQuestion'>
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
					<div className='textandCheckbox'>
						<p className='titleFormsCheckbox'>
							<input className='formCheckbox'
								name="helpFood"
								type="checkbox"
								value={true}
								ref={register}
							/> Quiero hacer una colecta en mi comunidad y trasladar los alimentos </p>
						<p className='titleFormsCheckbox'>
							<input className='formCheckbox'
								name="donarFood"
								type="checkbox"
								value={true}
								ref={register}
							/> Quiero donar alimentos para ser trasladados por Empresas Amigas </p>
					</div>
					<div>
						<p className='titleForms'>¿Con qué Empresa Amiga agendaste tu pedido?</p>
						<select className='selectFormHuertas'
							name="empresa"
							ref={
								register({
									required: { value: true, message: 'Ingrese la empresa' },
								})
							}
						>
							<option>BOA Santiago</option>
							<option>Foodies</option>
							<option>La cava del Sommelier</option>
							<option>Mano de chef</option>
							<option>Rossonero</option>
						</select>
						<span className='erorsText'>
							{errors?.empresa?.message}
						</span>
					</div>
					<div className='containerEachQuestion'>
						<p className='titleForms'>Ingresa tu número de pedido </p>
						<input className='inputsFormHuertas'
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
					<div className='containerEachQuestion'>
						<p className='titleForms'>Describe los alimentos y cantidades a donar para asegurarles un lugar dentro del transporte</p>
						<textarea className='textareaSection'
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
					<button className='btnSubmitForm' type="submit">ENVIAR FORMULARIO</button>
				</form>
			</div>
		</Fragment>
	);
}

export default Donate;