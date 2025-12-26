import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = () => {
  return (
    <div className="card"> hello
      <div className="top">
        {/* <img
          src="https://cdn.iconscout.com/icon/free/png-512/free-amazon-logo-icon-svg-download-png-1583154.png?f=webp&w=512"
          alt=""
        /> */}
        <button>
          Save <Bookmark /> </button>
      </div>
      <div className="center"></div>
      <div className="bottom"></div>
    </div>
  );
}

export default Card