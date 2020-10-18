import React from "react";
import "../donation/styles/modalDonation.css";
import logo from '../../img/logo.png'


const ModalDonation = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="closeModal" onClick={props.close}>X</span>
        <div className='logoContainerModal'>
          <img src={logo} className="logoModal" alt="logo" />
        </div>
        <p className="modal-text">Te redireccionaremos a nuestra plataforma de donaciones para recibir tu aporte. </p>
        <p className="modal-text">¡Muchas gracias!</p>
        <a href="https://yodono.cl/donar/207" target='_blanck'>
          <button onClick={props.close} className="btn-modal" >
            {" "}
          IR A YODONO.CL{" "}
          </button>
        </a>
      </div>
    </div>
  );
};

export default ModalDonation;
