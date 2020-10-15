import React, { Fragment, useState } from 'react';
import { firebase } from '../../firebase';
import logo from '../../img/logo.png';
import './login.css';
import imge from '../../img/Landing/Donar/almuerzo.jpg';
import {auth, db} from '../../firebase'

const Login = (props) => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = React.useState(null)
  const [esRegistro, setEsRegistro] = React.useState(false)

  const procesarDatos = e => {
    e.preventDefault()

   /*  if(!email.string() || !password.string()){
      console.log('Datos vacíos email!')
      setError('Datos vacíos email!')
      return
  }
  if(!password.string()){
      console.log('Datos vacíos pass!')
      setError('Datos vacíos pass!')
      return
  } */
 /*  if(password.length < 6){
      console.log('6 o más carácteres')
      setError('6 o más carácteres en pass')
      return
  } */
    console.log('correcto...')
    setError(null)

    if(esRegistro){
        registrar()
    }else{
        login()
    }

}

const login = React.useCallback(async () => {
  try {
      const res = await auth.signInWithEmailAndPassword(email, password)
      console.log(res.user)
      setEmail('')
      setPassword('')
      setError(null)
     
  } catch (error) {
      console.log(error)
      if(error.code === 'auth/invalid-email'){
          setError('Email no válido')
      }
      if(error.code === 'auth/user-not-found'){
          setError('Email no registrado')
      }
      if(error.code === 'auth/wrong-password'){
          setError('Contraseña incorrecta')
      }
  }
}, [email, password,])

const registrar = React.useCallback(async() => {

  try {
      const res = await auth.createUserWithEmailAndPassword(email, password)
      console.log(res.user)
      await db.collection('usuarios').doc(res.user.email).set({
          email: res.user.email,
          uid: res.user.uid
      })
      await db.collection(res.user.uid).add({
         
          fecha: Date.now()
      })
      setEmail('')
      setPassword('')
      setError(null)
      
  } catch (error) {
      console.log(error)
      if(error.code === 'auth/invalid-email'){
          setError('Email no válido')
      }
      if(error.code === 'auth/email-already-in-use'){
          setError('Email ya utilizado')
      }
  }

}, [email, password,])
 /*  const login = async (e) => {
    await firebase.auth().signInWithEmailAndPassword(email, password)
  } */

  return (
    <div className='containertwodivs'>
      <div className='containerImgLogin'>
        <img className='imgLogIn' src={imge} alt='img'/>
      </div>
      <div className='authPageContent'> 
      <div className='logoContainer'>
        <img src={logo} className="logoFooter" alt="logo" />
      </div>
      <div className='authContainer'>
        <h1 className='titleIntranet'>¡Bienvenido!</h1>
        <p className='textintranet'>Aquí podrás revisar los datos los voluntarios que han postulado a través de formularios.</p>
        <form onSubmit={procesarDatos}className='formIntranet'>
        {
                            error ? (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            ) : null
                        }
          <label htmlFor='email'
            className='textintranetInput'
          >
            Ingresar tu correo </label>
          <input type='email'
            placeholder='hola@comidaparatodos.cl'
            autoComplete='username'
            className='inputIntranet'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor='password'
            className='textintranetInput'>Contraseña </label>
          <input type='password'
            placeholder='*********'
            autoComplete='current-password'
            className='inputIntranet'
            onChange={e => setPassword(e.target.value)}
            value={password}
             />
             
          <button onClick={() => setEsRegistro()}
            className='btnAuthPage'
            type='submit'> {esRegistro ? 'Registrar' : 'Entrar'}
            
            </button>
            

        </form>
      </div>
    </div>
    </div>
    
  );


}
export default Login;