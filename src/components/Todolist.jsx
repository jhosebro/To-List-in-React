import React, {useContext} from "react";
import TaskCard from "./TaskCard.jsx";
import TaskContext from '../context/TaskContext.jsx';



export default function Todolist() {

  const {tasks} = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No tasks</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id + 1} task={task}/>
      ))}
    </div>
  );
}
