import React from "react";
import { AiFillCaretDown, AiFillCaretLeft, AiFillCaretRight, AiFillCaretUp } from "react-icons/ai";

const Snake = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="bg-slate-200 w-[30%] aspect-square border-2 border-black rounded">
        Snake
      </div>
      <div className="grid grid-cols-3 grid-rows-3">
        <AiFillCaretUp className="col-start-2" size={50} />
          <AiFillCaretLeft className="row-start-2" size={50} />
          <AiFillCaretRight className="row-start-2 col-start-3" size={50} />
        <AiFillCaretDown className="row-start-3 col-start-2" size={50} />
      </div>
    </div>
  )
}

export default Snake;