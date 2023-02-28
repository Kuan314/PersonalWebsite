import { useState } from "react";
import TextBar from "../component/TextBar";

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

  const addTask = () => {
    if(task.match(/^[\S]+$/)){
      console.log(task);
      tasks.push({
        name: task,
        status: false,
      });
    } else {
      alert("Your input is not valid!");
    }

    setTask("");
  }
  
  return (
    <>
    <div className="flex flex-col items-center pt-4">
      <h1 className="text-5xl pb-2">
        Todo List
      </h1>

      <form onSubmit={addTask}>
        <TextBar value={task} onChange={e => setTask(e.target.value)} />
      </form>

      <div className="m-2 p-2 w-60 flex flex-col justify-center mx-4 bg-white">
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
    </>
  )
}

export default Todo;