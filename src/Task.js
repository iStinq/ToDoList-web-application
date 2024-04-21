export const Task = (props) => {
    return <div>
    <h1 style={{color : props.completed ? "green" : "black"}}>{props.name}</h1>
    <button onClick={() => props.deleteTask(props.id)}>X</button>
    <button onClick={() => props.isCompletedTask(props.id)}>Completed</button>
  </div>
}