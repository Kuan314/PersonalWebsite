import React, { useState } from "react";

const CountDown = () => {
  const [min, setMin] = useState(1);
  const [sec, setSec] = useState(30);

  return (
    <div>
      {min} : {sec}
    </div>
  )
}

export default CountDown;