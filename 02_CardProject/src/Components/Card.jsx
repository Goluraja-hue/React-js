import React from "react";
import { Bookmark } from "lucide-react";

const Card = () => {
  return (
    <div className="card">
      <div className="top">
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/free-amazon-logo-icon-svg-download-png-1306063.png?f=webp&w=512"
          alt=""
        />
        <button>
          Save <Bookmark size={22} />
        </button>
      </div>
      <div className="center">
        <h3>Amazon <span>5 days ago</span></h3>
        <h2>Senior UI/UX Designer</h2>
        <div>
          <h4>Part Time</h4>
          <h4>Senior Level</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>$150/hr</h3>
          <p>Mumbai,India</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
