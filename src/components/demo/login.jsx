import React, { Fragment, useState } from 'react';
import { firebase } from '../../firebase';
import logo from '../../img/logo.png';
import './login.css';

const Login = () => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submit = async (e) => {
    await firebase.auth().signInWithEmailAndPassword(email, password)
  }

  return (
    <div className='authPageContent'>
      <div className='logoContainer'>
        <img src={logo} className="logoFooter" alt="logo" />
      </div>
      <div className='authContainer'>
        <h1 className='titleIntranet'>¡Bienvenido!</h1>
        <p className='textintranet'>Aquí podrás revisar los datos los voluntarios que han postulado a través de formularios.</p>
        <form className='formIntranet'>
          <label htmlFor='email'
            className='textintranetInput'
          >
            Ingresar tu correo </label>
          <input type='email'
            placeholder='rafael@comidaparatodos.cl'
            autoComplete='username'
            className='inputIntranet'
            onChange={(e) => setEmail+setPassword(e.target.value)}
          />
          <label htmlFor='password'
            className='textintranetInput'>Contraseña </label>
          <input type='password'
            placeholder='*********'
            autoComplete='current-password'
            className='inputIntranet'
            onChange={(e) => setPassword(e.target.value)} />
          <button
            className='btnAuthPage'>
            Entrar
            </button>
        </form>
      </div>
    </div>
  );


}
export default Login;