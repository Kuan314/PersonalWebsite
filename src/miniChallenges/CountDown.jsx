import React, { useEffect, useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

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

  const handleAdd = (val) => {
    setCount(prevCount => prevCount + val);
  };

  const handleMinus = (val) => {
    setCount(prevCount => prevCount - val);
  };

  const handleStart = () => {
    setIsRunning(!isRunning);
  };

  const min = Math.floor(count / 60);
  const sec = count % 60;

  return (
    <div className="flex flex-col items-center text-textPrimary">
      <h1 className="text-5xl">Count Down</h1>
      <div className="flex items-center text-3xl select-none">
        <div className="p-3">
          <AiOutlineCaretUp onClick={() => handleAdd(60)} className={isRunning ? "invisible" : ""} />
          {min >= 10 ? min : "0" + min.toString()}
          <AiOutlineCaretDown onClick={() => handleMinus(60)} className={isRunning ? "invisible" : ""} />
        </div>
        :
        <div className="p-3">
          <AiOutlineCaretUp onClick={() => handleAdd(1)} className={isRunning ? "invisible" : ""} />
          {sec >= 10 ? sec : "0" + sec.toString()}
          <AiOutlineCaretDown onClick={() => handleMinus(1)} className={isRunning ? "invisible" : ""} />
        </div>
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