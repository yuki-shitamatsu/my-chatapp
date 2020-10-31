// import classes from '*.module.css'
import React from 'react'
import firebase from '../firebase/firebase'
import classes from '../css/Message.module.css'
import NoProfile from '../assets/img/no-profile.png'

const Message = (props) => {
  const uid = props.ele.id;
  const isUser = (uid === firebase.auth().currentUser.uid);
  const chatClass = isUser ? 'chat' : 'chatReverse';
  
  return (
    <li className={chatClass}>
      <img className={classes.img} alt="icon" src={NoProfile} />
      <div>
        <div className={classes.user}>{props.ele.user}</div>
        <div className={classes.content}>{props.ele.content}</div>
      </div>
    </li>
  )
}

export default Message