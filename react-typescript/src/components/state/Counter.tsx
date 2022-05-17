import React, { useReducer } from 'react'
import { CodeActionCommand } from 'typescript';
const init = {
    count : 0
}

type CounterState = {
   count : number; 
}
type UpdateState = {
    type : 'increment' | 'decrement',
    payload: number
}
type ResetState = {
    type : 'reset',
    payload? : number,
}
type CounterAction = UpdateState | ResetState


const reducer = (state: CounterState,action : CounterAction) => {
    switch(action.type){
        case 'increment':
        return {...state, count : state.count+action.payload}
        case 'decrement':
        return {...state,count : state.count-action.payload}
        case 'reset':
            return {...init}
        default :
        return state;
    }
}

function Counter() {
   const [state,dispatch]  = useReducer(reducer,init);
  return (
    <div>
        <p>{state.count}</p>
        <button onClick={() => dispatch({type : 'increment',payload: 1})}></button>
        <button onClick={() => dispatch({type : 'decrement',payload: 1})}></button>
        <button onClick={() => dispatch({type : 'reset'})}></button>
    </div>
  )
}

export default Counter