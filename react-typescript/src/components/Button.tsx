import React , {useState}from 'react'
import Input from './Input';

type ButtonProps = {
    handleClick : (event: React.MouseEvent<HTMLButtonElement>,
        id:number) => void
}

function Button(props:ButtonProps) {
    const [value,setValue] = useState('')
    console.log(value)
  return (
      
    <div>
<button onClick={(event) => {
    props.handleClick(event,1);
}}>
    Button
    </button>
    <Input value={value} handleChange = {
   
        (event) => console.log(event.target)
        
    } />
</div>
  )
}

export default Button