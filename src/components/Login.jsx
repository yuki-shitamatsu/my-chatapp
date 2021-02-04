import React, {useContext, useState} from 'react';
import { AuthContext } from '../AuthService';
import firebase from '../firebase/firebase';
import { Redirect, Link } from 'react-router-dom';
import classes from '../css/Login.module.css'

const Login = ({history}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const hundleSubmit = e => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/")
      })
      .catch(err => {
        console.log(err)
      })
  }

  const user = useContext(AuthContext)

  if (user) {
    return <Redirect to="/" />
  }

  return (
    <>
      <h1 className={classes.title}>CHAT APP</h1>
      <div className={classes.container}>
        <div className={classes.formBox}>
          <h1 className={classes.formTitle}>Login</h1>
          <form onSubmit={hundleSubmit}>
            <div>
              <label htmlFor='email'>E-mail</label>
              <p className={classes.mail}><input 
                type='email'
                id='email'
                name='email'
                placeholder='Email'
                onChange={e=>{
                  setEmail(e.target.value)
                }}
              /></p>
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <p className={classes.pass}><input 
                type='password'
                id='password'
                name='password'
                placeholder='Password'
                onChange={e=>{
                  setPassword(e.target.value)
                }}
              /></p>
            </div>
            <p className={classes.submit}><button type='submit'>Login</button></p>
          </form>
        <Link to="/signup" className={classes.linkTo}>
          アカウント作成はこちら
        </Link>
        </div>
      </div>
    </>
  )
}

export default Login