import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, actionsByAmount } from '../features/additemslicer';

const Counter = () => {
    const state = useSelector(state => state.count);
    const dispatch = useDispatch();

    const [incrementAmt, setIncrementAmt] = useState(0);
  return (
    <div>{state}
    <br />
    <button onClick={() => dispatch(increment())}>Increment</button><button onClick={() => dispatch(decrement())}>decrement</button> <br />
    <button onClick={()=>{dispatch(reset())}}>Reset</button>
    <br />
    <input type='number' onChange={(e)=> setIncrementAmt(e.target.value)}/> <br />
    <button onClick={()=>{dispatch(actionsByAmount({amt:+incrementAmt, type:'add'}))}}>Increment By Amount</button>
    <button onClick={()=>{dispatch(actionsByAmount({amt:+incrementAmt, type:'sub'}))}}>Decrement By Amount</button>
    </div>
  )
}

export default Counter