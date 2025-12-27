import React from 'react'
import { ArrowBigLeft, ArrowRight } from "lucide-react";
const RightCardContent = (props) => {
  return (
    <div className="absolute h-full w-full  p-6 top-0 left-0 flex flex-col justify-between">
      <h2 className="bg-white text-black text-2xl rounded-full h-10 w-10 flex justify-center items-center font-semibold">
        {props.id+1}
      </h2>
      <div>
        <p className=" leading-normal mb-10">
          {props.intro}
        </p>
        <div className="flex justify-between items-center">
          <button className="bg-blue-600 px-6 font-medium py-2 rounded-full">
            {props.tag}
          </button>
          <button className="bg-blue-600 px-3 font-medium py-2 rounded-full">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightCardContent