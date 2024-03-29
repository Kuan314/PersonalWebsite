import React, { useState } from "react";

const tasks = [
  {
    name: "Wash clothes",
    status: false,
  },
  {
    name: "Jogging",
    status: true,
  },
];

const Todo = () => {
  const [task, setTask] = useState("");

  const addTask = (event) => {
    if(task.match(/^[\S]+$/)){
      tasks.push({
        name: task,
        status: false,
      });
    } else {
      alert("Your input is not valid!");
    }

    setTask("");
    event.preventDefault();
  }
  
  return (
    <div className="flex flex-col items-center text-textPrimary">
      <h1 className="text-5xl pb-2">
        Todo List
      </h1>

      <form onSubmit={addTask}>
        <input className="px-1 border rounded-md" type="text" value={task} onChange={e => setTask(e.target.value)} />
        <button className="px-1 mx-2 border-textSecondary rounded-md border-2">Submit</button>
      </form>

      <div className="m-2 p-2 w-60 flex flex-col justify-center mx-4 bg-textPrimary rounded text-textSecondary">
        {tasks.map((task) => {
          return (
            <div className="flex justify-between">
              {task.name}
              <input type="checkbox" defaultChecked={task.status} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Todo;