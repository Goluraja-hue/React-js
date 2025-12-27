
import React from 'react'
import RightCardContent from './RightCardContent';


const RightCard = (props) => {
  console.log(props);
  return (
    <div className="h-full rounded-4xl relative shrink-0 overflow-hidden w-60 ">
      <img
        className="h-full w-full object-cover "
        src={props.img}
        alt=""
      />
      <RightCardContent id={props.id} tag={props.tag} intro={props.intro} />
    </div>
  );
}

export default RightCard