import React from "react";

const TextBar = () => {
  return (
    <form>
      <input className="px-1 border rounded-md" type="text" value={task} onChange={e => setTask(e.target.value)} />
      <button className="px-1 mx-2 border-textSecondary rounded-md border-2">Submit</button>
    </form>
  )
}

export default TextBar;