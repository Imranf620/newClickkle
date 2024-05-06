import React from "react";
import "../Card/card.css";
// import atm from '../Images/ATMe.png'



const Card = ({img, heading, para, link, className}) => {
  return (
    <div>
      <div className="container p-2 bg-daner rounded border">
        <div className="container bg-waing m-0">
          <div className="row m-0 p-0 d-flex align-items-center">
            <div className="container col-lg-8 col-12 bg-seondary m-0 cardo ps-3 ">
                <h2>{heading}</h2>
                <p>{para}</p>
            </div>
            <div className="container col bg-warig card-img">
                <img src={img}  alt="" className='ms-auto d-block ' />
            </div>
          </div>
        </div>
      </div>
        <div className="container bg-ifo p-3 border cardi">
            <a href="/" className="ms-4">{link}</a>
        </div>
    </div>
  );
};

export default Card;
