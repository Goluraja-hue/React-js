import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("waiting......",title);
    setTitle("");
  };

  return(
    <div>
    <form onSubmit={(e) => {
      submit(e);
    }}>
      <input type="text" placeholder="Enter Name" value={title}
       onChange={(e)=>{
        setTitle(e.target.value);
      }} />
      <button>Submit</button>
    </form>
  </div>
  ) 
};

export default App;
