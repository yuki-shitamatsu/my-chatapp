import React, { useEffect, useState } from 'react'
import Message from './Message'
import firebase from '../firebase/firebase'

const Room = () => {
  const [messages, setMessages] = useState([])
  const [value, setValue] = useState('')

  useEffect(() => {
    firebase.firestore().collection('messages').onSnapshot((snapshot) => {
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
          createDate: firebase.firestore.FieldValue.serverTimestamp()
      }
      firebase.firestore().collection('messages').add(sendObj)
      setValue("")
  }

  return (
    <>
      <h1>Chat Room</h1>
      <div>
        <table>
          {
            messages.map(element => {
              return(
                <Message ele={element} />
              )
            })
          }
        </table>
      </div>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">送信</button>
      </form>
      <button onClick={() => firebase.auth().signOut()}>ログアウト</button>
    </>
  )
}

export default Room