import React, { useState } from 'react'
type CounterProps = {
    init? : number;
    children :  JSX.Element |JSX.Element[]

}


function Counter(props:CounterProps) {
    const {init = 15, children} = props
    const [counter,setCounter] = useState(init);
  return (
    <div>
        <div>{counter}</div>
        {children}
      <button onClick={() => setCounter(counter+1)}>Add one</button>
    </div>
  )
}

export default Counter