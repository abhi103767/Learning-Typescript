import React from 'react'
type greetProps = {
    name : string,
    countMessage?: number
}

function Greet(props:greetProps) {
    const {countMessage = 0} = props
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.countMessage}</p>
        </div>
  )
}

export default Greet