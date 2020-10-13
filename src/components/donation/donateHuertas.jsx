import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles/donateHuertas.css'
import {firebase} from '../../firebase'
import banner from '../../img/Landing/Donar/huertas.jpg'

function DonateHuertas() {
	const db = firebase.firestore()
	const { register, errors, handleSubmit } = useForm()

	const [formHuerta, setFormHuerta] = useState([]);

	const enviarDatos =  (data, event) => {
			setFormHuerta([...formHuerta, data])
			event.preventDefault();
			event.target.reset();
			console.log(data)
			db.collection("Huertas").doc(data.nombreCompleto).set({
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
				<p className='text'>Queremos aprovechar cualquier espacio que tengas para comenzar huertas urbanas permaculturales, que nos permitan abastecer a comedores y emprendimientos de nuestra red.</p>
				<br />
				<h2>¿Cómo puedo ayudar?</h2>
				<p className='text'>¡Podemos inaugurar juntos nuevas huertas comunitarias! Si hay espacios disponibles en tu barrio o si quieres regalarnos un espacio de tu patio. También puedes ofrecerte a mantener huertas existentes.</p>
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
						<option>no</option>
						<option>se</option>
						<option>cuales</option>
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
				<div className='textandCheckbox'>
					<p className='titleFormsCheckbox'><input
						className='formCheckbox'
						name="ayudarHuerta"
						type="checkbox"
						value={true}
						ref={register}
					/> Quiero ayudar en la mantención de huertas comunitarias. </p>
					<p className='titleFormsCheckbox'><input
						className='formCheckbox'
						name="donarHuerta"
						type="checkbox"
						value={true}
						ref={register}
					/> Quiero donar espacio para comenzar una huerta comunitaria </p>
				</div>
				<div>
					<p className='titleForms'>¿Cuántos m2 tiene el espacio?</p>
					<input
						className='inputsFormHuertas'
						name="tamanoTerreno"
						ref={
							register({
								required: { value: true, message: 'Ingrese cantidad de m2' },
							})
						}
						placeholder="Ej 6m2 o 2x3m"
					/>
					<span className='erorsText'>
						{errors?.tamanoTerreno?.message}
					</span>
				</div>
				<div>
					<p className='titleForms'>¿El espacio está en su casa o barrio? Cuéntanos todos los detalles que puedas</p>
					<textarea
						className='textareaSection'
						name="detalle"
						ref={
							register({
								required: { value: true, message: 'Ingresa los detalles' },
							})
						}
						placeholder="Ej. Tengo un espacio de 1m de ancho y 7 de largo en la vereda afuera de mi entrada"
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

export default DonateHuertas;