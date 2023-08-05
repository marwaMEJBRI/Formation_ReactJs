import React,{useState, useEffect, useRef} from 'react'

const ClassComponent = () => {
    const [count,setCount]=useState(0);
    const name = useRef();

  return (
    <div>
        <h4>{count}</h4>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        <br/>
        <input type='text' ref={name}/>
        <button onClick={()=>console.log(name.current.value)}>Print name</button>
    </div>
  )
}

export default ClassComponent