import React from 'react'
type PersonProps = {
    name : {
first : string,
last: string
    }[]
}

function Person(props:PersonProps) {
  return (
    <div>
   {   props.name.map((item) => {
       return <div>{item.first} {item.last}</div>
   })
    }
        
    </div>
  )
}

export default Person