import React from 'react';
import './styles/transparency.css';
import graphic from '../../img/AboutUs/transparency.png';

function Transparency() {
	return (
		<div className='sectionTransparency'>
			<h1>TRANSPARENCIA</h1>
			<div className='containerTransparency'>
				<img src={graphic} className='graphic'/>
			</div>
		</div>
	);
}

export default Transparency;