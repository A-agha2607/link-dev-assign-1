import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TaskForm } from './components/TaskForm'
import TaskList from './components/TaskList'


function App() {
  const [tasks,setTasks]=useState(["bootstrap assign","react assign"])
  const [input,setInput]=useState();
  const [updatedInd,setUpdatedInd]=useState(null);
  const [tasksLen,setTaskslen]=useState(2);
  useEffect(()=>{
    setTaskslen(tasks.length)
  },[tasks]);
  

  //add functionality
  const hndleAdd=(input)=>{
    console.log(input)
    if(input.trim()!==""){
    const newTasks=[...tasks,input];
    setTasks(newTasks);
    console.log(tasks);
    }
  }
    //delete functionality
    const hndleDelete=(index)=>{
      const filteredTasks=tasks.filter((_,i)=>index !==i);
      setTasks(filteredTasks);
    }
    //edit functionality
    const hndleEdit=(index)=>{
      setInput(tasks[index]);
      setUpdatedInd(index);
    }
    const hndlUpdate=()=>{
      const newArr=[...tasks];
      newArr[updatedInd]=input;
      setTasks(newArr);
      setUpdatedInd(null);
    }
  

  

  return (
    <>
    <h2>Tasks to do:{tasksLen}</h2>
    <TaskForm onAdd={hndleAdd} onUpdate={hndlUpdate} input={input} setInput={setInput} updatedInd={updatedInd}/>
    <TaskList tasks={tasks} onDelete={hndleDelete} onEdit={hndleEdit} updatedInd={updatedInd} />
    </>
  )
}

export default App
