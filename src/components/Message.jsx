// import classes from '*.module.css'
import React from 'react'
import firebase from '../firebase/firebase'
import classes from '../css/Message.module.css'

const Message = (props) => {
  const uid = props.ele.id;
  const isUser = (uid === firebase.auth().currentUser.uid);
  const chatClass = isUser ? 'chat' : 'chatReverse';
  
  return (
    <li className={chatClass}>
      <div className={classes.user}>{props.ele.user}</div>
      <div className={classes.content}>{props.ele.content}</div>
    </li>
  )
}

export default Message