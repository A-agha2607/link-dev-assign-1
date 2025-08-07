    import React,{useState} from 'react'


    export default function TaskItem({task,onDelete,onEdit,index,updatedInd}) {
    const [isDone,setIsDone]=useState(false);
    const hndleDone=()=>{
        setIsDone(true);
    };
    return (
    <>
        <li className={isDone ?'done':''} >
            {task}
        </li>
        <button  onClick={()=>onDelete(index)} disabled={updatedInd === index}> delete</button>
        <button onClick={()=>onEdit(index)} disabled={updatedInd === index}>edit</button>
        <button onClick={()=>hndleDone()} disabled={updatedInd === index}>mark as done</button>

    </>
        
    )
    }
