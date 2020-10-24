import React, { useState } from 'react'
import firebase from '../firebase/firebase'
import classes from '../css/SignUp.module.css'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(({user}) => {
            user.updateProfile({
              displayName: name
            })
          })
          .catch(err => {
            console.log(err)
          })
        }

  return (
    <>
      <h1 className={classes.title}>Welcome to CHAT APP</h1>
      <div className={classes.formBox}>
        <h1 className={classes.formTitle}>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>E-mail</label>
            <p className={classes.mail}><input
              name='email'
              type='email'
              id='email'
              placeholder='Email'
              onChange={e=>{
                setEmail(e.target.value)
              }}
              /></p>
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <p className={classes.pass}><input
              name='password'
              type='password'
              id='password'
              placeholder='Password'
              onChange={e=>{
                setPassword(e.target.value)
              }}
              /></p>
          </div>
          <div>
            <label htmlFor='name'>Name</label>
            <p className={classes.name}><input
              name='name'
              type='name'
              id='name'
              placeholder='ユーザー名'
              onChange={e=>{
                setName(e.target.value)
              }}
              /></p>
          </div>
          <p className={classes.submit}><button type='submit'>Sign Up</button></p>
        </form>
      </div>
    </>
  )
}

export default SignUp