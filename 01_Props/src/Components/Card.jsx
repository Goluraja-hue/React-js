import React from "react";

const Card = (props) => {
  console.log(props.image);
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <h2>
        {props.user} , {props.age}
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
        similique.
      </p>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
