import React from 'react';
import './styles/transparency.css';
import graphic from '../../img/AboutUs/transparency.png';

function Transparency() {
	return (
		<div className='sectionTransparency'>
			<h1>TRANSPARENCIA</h1>
			<div className='transparencyFlexBox'>
				<p className='textTransparency'>A continuación te mostramos cómo invertimos tu aporte para fortalecer cada parte de la red de <strong>comida para todos</strong>.</p>
				<div className='containerTransparency'>
					<img src={graphic} alt="" className='graphic' />
				</div>
			</div>

		</div>
	);
}

export default Transparency;