import React from 'react'

const MessageLog = ({messages}) => {

  // console.log(messages)
  return (
    <div className='messageLog'>
      {(messages.length > 0) ? `Actions log:` : ``}
      {messages.map((message, index) => <div key={index}>{message}</div>)}
    </div>
  )
}

export default MessageLog