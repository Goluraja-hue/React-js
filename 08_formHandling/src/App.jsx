import React from 'react'
import Card from './Card';
import Array from './Array';

const App = () => {

  const Submit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  }

  return (
    <div>
      <h1>Form Handling Example</h1>
      <form onSubmit={(e)=>{
        Submit(e);
      }}>
        <input type="text" placeholder='Enter Name' />
        <button>Submit</button>
      </form>

      
      {/* <Card />
      <Array /> */}
    </div>
  )
}

export default App