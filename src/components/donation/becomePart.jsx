import React, { useState } from "react";
import './styles/becomePart.css';
import ModalDonation from "./modalDonation";
import BtnModal from './btnModal';


function BecomePart() {


	const [showModalPre, setShowModalPre] = useState(false)


	const openModalPre = () => {
		setShowModalPre(true);
	}

	const closeModalPre = () => {
		setShowModalPre(false);
	}



	return (
		<div className='sectionBecomePart'>
			<div>
				<h1 className='titleBecome'>¡HAZTE PARTE!</h1>
				<p className='textbecomepart'>En Comida para todos queremos llevar almuerzos nutritivos a comunidades vulnerables, pero más aún queremos<strong> otorgar herramientas y crear redes</strong> que les permitan proteger su propia seguridad alimentaria en el futuro.</p>
			</div>
			<div>
				<BtnModal showModal={openModalPre} />
				{showModalPre === false ? null : <ModalDonation close={closeModalPre} />}
				<h4 className='textCenter'><strong>¡Cocinemos juntos un generoso almuerzo solidario con calidad nutricional garantizada!</strong></h4>
			</div>

		</div>
	);
}

export default BecomePart;