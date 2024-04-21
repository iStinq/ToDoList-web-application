import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }
  
  const addTask = () => {
    const task = {
      id : toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      name : newTask,
      completed : false
    }
    setToDoList([...toDoList, task]);
  }

  const deleteTask = (idTaskToDelete) => {
    return setToDoList(toDoList.filter((task) => idTaskToDelete !== task.id))
  }

  const isCompletedTask = (idTaskCompleted) => {
    return setToDoList(toDoList.map((task) => {
      if (idTaskCompleted === task.id) {
        return {...task, completed : true}
      }
      else {
        return task;
      }
    }))
  }
  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={addTask}>Add Task</button><br />
      <div className="list">
        {toDoList.map((task) => {
          return <Task name = {task.name} id = {task.id} completed = {task.completed} deleteTask = {deleteTask} isCompletedTask = {isCompletedTask}/>
        })}
      </div>
    </div>
  )
}


export default App;