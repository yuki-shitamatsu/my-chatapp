import React, { useEffect, useState, useRef } from 'react'
import Message from './Message'
import firebase from '../firebase/firebase'
import classes from '../css/Room.module.css'

const Room = ({room}) => {
  const [messages, setMessages] = useState([])
  const [value, setValue] = useState('')

  useEffect(() => {
    firebase.firestore().collection('messages').orderBy("createDate", "asc").onSnapshot((snapshot) => {
        // const messages = snapshot.docs.map(doc => {
        //   return doc.data()
        // })
        // setMessages(messages)
        // ↑ setValueしても再描画されないReactのバグ
        
        // ↓ 再描画されない症状の回避方法
        const messageArray = []
        snapshot.forEach(doc => {
          messageArray.push({
            ...doc.data(), docId:doc.id
          })
        })
        const newArray = Object.assign([], messageArray)
        setMessages(newArray)
      })
  }, [])
  
  const handleSubmit = e => {
      e.preventDefault()
    
      let userName = "名無し"
      if (firebase.auth().currentUser.displayName != null) {
        userName = firebase.auth().currentUser.displayName
      } 

      const sendObj = {
          content: value,
          user: userName,
          id: firebase.auth().currentUser.uid,
          createDate: firebase.firestore.FieldValue.serverTimestamp()
      }
      firebase.firestore().collection('messages').add(sendObj)
      setValue("")
  }

// 自動スクロール
  useEffect(() => {
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [messages])

  return (
    <>
      <div className={classes.container}>
        <div className={classes.logoutContainer}>
          <button className={classes.logoutButton} onClick={() => firebase.auth().signOut()}>ログアウト</button>
        </div>
        <div className={classes.chatArea} id={"scroll-area"}>
          <ul>
            {
              messages.map(element => {
                return(
                  <Message ele={element} />
                )
              })
            }
          </ul>
        </div>
        <div className={classes.messageArea}>
          <form onSubmit={handleSubmit} >
            <input
              type="text"
              value={value}
              onChange={e => setValue(e.target.value)}
              />
            <button type="submit">送信</button>
          </form>
        </div>
        
      </div>
    </>
  )
}

export default Room