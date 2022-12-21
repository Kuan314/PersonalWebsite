import React, { useState } from "react";

const [num, getNum] = useState(0);

function Counter() {
  return ( 
    <>
    <h1>Counter</h1>
    <div className="p-2">
      {num}
    </div>
    <div className="flex justify-between items-center">
      <button>
        +
      </button>
      <button>
        -
      </button>
    </div>
    </>
  )
}

export default Counter;