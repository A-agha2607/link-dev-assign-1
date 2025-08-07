import React, { useState } from 'react'

export  function TaskForm({onAdd,onUpdate,input,setInput,updatedInd}) {
    

  return (
    <div>
        
        <input value={input} type="text" placeholder='enter task ' onChange={(e)=>(setInput(e.target.value))} />
  
        {updatedInd==null?( <button onClick={()=>{onAdd(input); setInput(""); }} >add</button> ):(<button onClick={onUpdate}>update</button>)}
       
        
    </div>
  )
}
