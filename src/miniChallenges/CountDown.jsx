import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [count, setCount] = useState(65);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId = null;
    // Count down
    if(isRunning && count > 0) {
      intervalId = setInterval(() => {
          setCount(prevCount => prevCount-1);
        }, 1000);
    }

    if(count === 0) {
      setIsRunning(false);
    }

    return () => {
      clearInterval(intervalId);
    }

  }, [isRunning, count]);

  const handleStart = () => {
    setIsRunning(!isRunning);
  }

  const min = Math.floor(count / 60);
  const sec = count % 60;

  return (
    <div className="flex flex-col items-center text-textPrimary">
      <h1 className="text-5xl">Count Down</h1>
      <div className="p-3 my-2 text-3xl">
        {min >= 10 ? min : "0" + min.toString()} : {sec >= 10 ? sec : "0" + sec.toString()}      
      </div>

      <button 
        className="w-20 p-2 m-2 text-xl border-textSecondary border-2 rounded-md hover:bg-textSecondary hover:text-white"
        onClick={handleStart}
      >
        {isRunning ? "Pause" : "Start"}
      </button>

    </div>
  )
}

export default CountDown;