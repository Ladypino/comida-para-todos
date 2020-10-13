import React from 'react';
import './styles/whatWeDo.css';
import scheme from '../../img/AboutUs/scheme.png';


function WhatWeDo() {
	return (
		<div className='sectionWhatWeDo'>
			<h1>QUÉ HACEMOS</h1>
			<p className='text'>Con tu donación ponemos en marcha un sistema donde<strong> todas las partes interactúan, creando una red de apoyo</strong> que permite generar empleo y recursos, para favorecer un modelo circular que pueda auto-sustentarse.</p>
			<div className='containerScheme'>
				<img className='scheme' src={scheme} alt='scheme'/>
			</div>
			<p className='text'>Los restaurantes colaboradores de nuestra red<strong> reciben tu aporte</strong>, que ha sido <strong>duplicado</strong> por empresas colaboradoras, para pagar <strong>personal extra</strong> y comprar insumos a <strong>pequeños productores</strong>, así cocinan y empacan los almuerzos, que serán llevados a <strong>comedores solidarios</strong> por <strong>transportistas</strong> que han estado detenidos a causa de la pandemia. <br/>Los comedores reciben comida lista para calentar y servir,<strong> alimentando a los sectores vulnerables de la población.</strong> <br/>
Además, los restaurantes apadrinan comedores para capacitar la comunidad, lo que junto con nuestro<strong> voluntariado de acción directa </strong>permite dar herramientas y redes de apoyo para que dichas comunidades sigan surgiendo.</p>
		</div>

	);
}

export default WhatWeDo;