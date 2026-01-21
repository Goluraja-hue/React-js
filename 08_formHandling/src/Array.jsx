import React, { useState } from "react";

const Array = () => {
  const [num, setnum] = useState(10);

  const btnClicked = () => {
      setnum (prev => (prev + 1))
      setnum (prev => (prev + 1))
      setnum (prev => (prev + 1))
      setnum (prev => (prev + 1))
    
};

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  );
};

export default Array;
