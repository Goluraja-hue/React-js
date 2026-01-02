import React from 'react'

const App = () => {

  function scroll(val){
    if (val>0){
      console.log("page scrolling seedha",val);
    }
    else {
      console.log("page scrolling ulta",val);
    }
  }

  return (
    <div>
      <div onWheel={(elem)=>{
        
        scroll(elem.deltaY);
      }} className="parent">
        <div className="page"></div>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page1"></div>
        <div className="page2"></div>
      </div>
    </div>
  );
}

export default App