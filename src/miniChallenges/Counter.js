import React, { useState } from "react";

function Counter() {
  const [num, getNum] = useState(0);

  return ( 
    <>
    <div className="flex flex-col items-center pt-4">
      <h1 className="text-5xl">Counter</h1>
      <div className="p-3 my-2 text-3xl rounded-md">
        {num}
      </div>
      <div className="flex">
        <button className="w-12 p-2 m-2 text-xl border-2 rounded-md active:bg-[#000], ">
          +
        </button>
        <button className="w-12 p-2 m-2 text-xl border-2 rounded-md">
          -
        </button>
        <button className="p-2 m-2 text-xl border-2 rounded-md">
          reset
        </button>
      </div>
    </div>
    </>
  )
}

export default Counter;