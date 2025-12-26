import React from "react";
import { Bookmark } from "lucide-react";

const Card = (prop) => {
  return (
    <div className="card">
      <div className="top">
        <img
          src= {prop.img}    alt=""
        />
        <button>
          Save <Bookmark size={22} />
        </button>
      </div>
      <div className="center">
        <h3>{prop.company} <span>5 days ago</span></h3>
        <h2>{prop.post}</h2>
        <div>
          <h4> {prop.time} </h4>
          <h4> {prop.level} </h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3> {prop.rate} </h3>
          <p>{prop.place}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
