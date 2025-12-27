import React from 'react'
import RightCard from './RightCard'

const RightPage = (props) => {

  return (
    <div id='scroll' className="h-full flex gap-5  flex-nowrap overflow-auto p-6 w-3/4 ">
      {props.users.map(function(elem,idx){
        return <RightCard id={idx} img={elem.img} tag={elem.tag} intro={elem.intro} />;
      })}
    </div>
  );
}

export default RightPage