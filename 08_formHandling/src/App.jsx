import React from 'react'

const App = () => {

  const click = (e) => {
    e.preventDefault();
    console.log("form submitted");
  }

  return (
    <div>
      <h1>Form Handling Example</h1>
      <form onSubmit={(e)=>{
        click(e);
      }}>
        <input type="text" placeholder='Enter Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App