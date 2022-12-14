import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const addNum = () => {
    setNum(num + 1);
  };

  const minusNum = () => {
    setNum(num - 1);
  };

  const resetNum = () => {
    setNum(0);
  }

  return ( 
    <>
    <div className="flex flex-col items-center pt-4">
      <h1 className="text-5xl">Counter</h1>
      <div className="p-3 my-2 text-3xl rounded-md">
        {num}
      </div>
      <div className="flex">
        <button 
          className="w-12 p-2 m-2 text-xl border-textSecondary border-2 rounded-md hover:bg-textSecondary hover:text-white" 
          onClick={addNum}
        >
          +
        </button>
        <button 
          className="w-12 p-2 m-2 text-xl border-textSecondary border-2 rounded-md hover:bg-textSecondary hover:text-white"
          onClick={minusNum}
        >
          -
        </button>
        <button
          className="p-2 m-2 text-xl border-textSecondary border-2 rounded-md hover:bg-textSecondary hover:text-white"
          onClick={resetNum}
        >
          reset
        </button>
      </div>
    </div>
    </>
  )
}

export default Counter;