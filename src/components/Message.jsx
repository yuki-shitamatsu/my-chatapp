import React from 'react'

const Message = (props) => {
  return (
    <tr>
      <td>{props.ele.content}</td>
      <td>{props.ele.user}</td>
    </tr>
  )
}

export default Message