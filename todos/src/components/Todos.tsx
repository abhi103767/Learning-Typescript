import axios,{AxiosResponse} from 'axios';
import { nanoid } from 'nanoid'
import React,{useEffect, useState} from 'react'



type TodoSchema = {
    id : string,
    status : boolean,
    title : string
}

function Todos() {
    const [text,setText] = useState('');
    const [todos,setTodos] = useState<TodoSchema[]>([]);

    useEffect(() => {
        getTodos()
    },[])

    const getTodos = () => {
        axios.get('http://localhost:8080/posts')
        .then((response : AxiosResponse<TodoSchema[]>) => {
       const   {data}  = response;
      setTodos(data);
        })
    }


  return (
    <div>
        <input type={'text'} value={text} onChange={
            (e) => {
               setText(e.target.value)
            }
        } />
        <button onClick={() => {
          const  payload = {
                id: nanoid() ,
                status : false,
                title : text

            }
        axios.post(' http://localhost:8080/posts',payload).then((res) => {
            console.log(res.data);
            getTodos()
        })
        }}>Add Todo</button>
        {
            todos.map((e) => {
                return <div>{e.title}</div>
            })
        }
    </div>
  )
}

export default Todos