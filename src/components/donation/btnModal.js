import React, { Fragment } from 'react';
import '../donation/styles/btnModal.css';


const BtnModal = (props) => {
  return (
    <Fragment>
      <div>
        <button className="btn-Modal" onClick={props.showModal}> DONAR 1 ALMUERZO $3.000 </button>
      </div>
    </Fragment>
  );
}

export default BtnModal;