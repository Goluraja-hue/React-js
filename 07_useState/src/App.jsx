import React, { useState } from 'react'

const App = () => {

 const [Num, setNum] = useState(0);

 const Increase = () => {
    setNum(Num+1)
 }
 const jump = () => {
    setNum(Num+5)
 }
 
 const Decrease = () => {
  if (Num !== 0) {
  setNum(Num - 1);
  }
   
 };

  return (
    <div>
      <div className="container">
        <h1>{Num}</h1>
        <button onClick={Increase}>Increase</button>
        <button onClick={Decrease}>decrease</button>
        <button onClick={jump}>Jump 5</button>
      </div>
    </div>
  );
}

export default App