// import classes from '*.module.css'
import React from 'react'
import classes from '../css/Message.module.css'

const Message = (props) => {
  return (
    <tr>
      <td className={classes.user}>{props.ele.user}</td>
      <td className={classes.content}>{props.ele.content}</td>
    </tr>
  )
}

export default Message