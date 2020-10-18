import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles/donateHuertas.css'
import { firebase } from '../../firebase'
import banner from '../../img/Landing/Donar/huertas.jpg'

function DonateHuertas() {
	const db = firebase.firestore()
	const { register, errors, handleSubmit } = useForm()

	const [formHuerta, setFormHuerta] = useState([]);

	const currentDate = () => {
    let date = new Date();
    const day = date.getDate();
    const month = (date.getMonth() < 9 ? "0" : "") + (date.getMonth() + 1);
    const year = date.getFullYear();
    date = `${day}/${month}/${year}`;
    return date;
  };

	const enviarDatos = (data, event) => {
		setFormHuerta([...formHuerta, data])
		event.preventDefault();
		event.target.reset();

		db.collection("Huertas").doc(data.nombreCompleto).set({
			nombreCompleto: data.nombreCompleto,
      correo: data.correo,
      numeroTelefonico: data.numeroTelefonico,
      region:data.region,
      comuna: data.comuna,
			fecha: currentDate(),
			ayudarHuerta: data.ayudarHuerta,
      donarHuerta: data.donarHuerta,
      tamanoTerreno: data.tamanoTerreno,
      detalle: data.detalle,
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
					<p className='text'>Queremos aprovechar cualquier espacio que tengas para comenzar huertas urbanas permaculturales, que nos permitan abastecer a comedores y emprendimientos de nuestra red.</p>
					<br />
					<h2 className='marginTopForm2'>¿Cómo puedo ayudar?</h2>
					<p className='text'>¡Podemos inaugurar juntos nuevas huertas comunitarias! Si hay espacios disponibles en tu barrio o si <strong>quieres regalarnos un espacio</strong> de tu patio. También puedes ofrecerte a mantener huertas existentes.</p>
				</div>
				<form className='formHuertasSection' onSubmit={handleSubmit(enviarDatos)}>
					<div className='containerEachQuestion'>
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
					<div className='containerEachQuestion'>
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
					<div className='containerEachQuestion'>
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
					<div className='containerEachQuestion'>
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
						<div>
							<p className='titleFormsCheckbox'>
								<input
									className='formCheckbox'
									name="ayudarHuerta"
									type="checkbox"
									value={true}
									ref={register}
								/> Quiero ayudar en la mantención de huertas comunitarias. </p>
						</div>
						<div>
							<p className='titleFormsCheckbox'><input
								className='formCheckbox'
								name="donarHuerta"
								type="checkbox"
								value={true}
								ref={register}
							/> Quiero donar espacio para comenzar una huerta comunitaria </p>
						</div>
					</div>
					<div className='containerEachQuestion'>
						<p className='titleForms'>¿Cuántos m2 tiene el espacio?</p>
						<input
							className='inputsFormHuertas'
							name="tamanoTerreno"
							placeholder="Ej 6m2 o 2x3m"
							ref={register}
						/>
					</div>
					<div className='containerEachQuestion'>
						<p className='titleForms'>¿El espacio está en su casa o barrio? Cuéntanos todos los detalles que puedas</p>
						<textarea
							className='textareaSection'
							name="detalle"
							placeholder="Ej. Tengo un espacio de 1m de ancho y 7 de largo en la vereda afuera de mi entrada"
							ref={register}
						/>
					</div>
					<button className='btnSubmitForm' type="submit">ENVIAR FORMULARIO</button>
				</form>
			</div>
		</Fragment>
	);
}

export default DonateHuertas;