import React from 'react'
import TaskItem from './TaskItem'


export default function ({tasks,onDelete,onEdit,updatedInd}) {
  return (
    <div>
    <ul>
        {tasks.map((task,index)=>(
            <>
                <TaskItem task={task} onDelete={onDelete} onEdit={onEdit} index={index} updatedInd={updatedInd}/>
            </>
        ))}
    </ul>
    </div>
  )
}
