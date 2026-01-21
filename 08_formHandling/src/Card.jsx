import React, { useState } from 'react'

const Card = () => {



    const [num, setnum] = useState({user:"golu",roll:102})

    function click(){
        const newArr = {...num}
        newArr.user = "Anshu";
        setnum(newArr);
        console.log(newArr);
    }
  return (
    <div>
        <h1>{num.user},{num.roll}</h1>
        <button onClick={click}>Click</button>
    </div>
  )
}

export default Card