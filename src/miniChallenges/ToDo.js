
const lists = [
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
  return (
    <>
    <div className="flex flex-col items-center pt-4">
      <h1 className="text-5xl pb-2">
        Todo List
      </h1>

      <form>
        <input className="px-1 border rounded-md" type="text" />
        <button className="px-1 mx-2 border-textSecondary rounded-md border-2 ">Submit</button>
      </form>

      <div className="m-2 p-2 w-60 flex flex-col justify-center mx-4 bg-white">
        {lists.map((list) => {
          return (
            <div className="flex justify-between">
              {list.name}
              <input type="checkbox" defaultChecked={list.status} />
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default Todo;