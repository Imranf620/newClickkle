import React from 'react'
import '../card2/card2.css'


const Card2 = ({heading, para, link,img}) => {
  return (
    <div>
      <div className="container bg-daner rounded border">
          <div className="container bg-waing m-0">
            <div className="row m-0 d-flex p-0 align-items-center">
              <div className="container col-lg-10 col-11 bg-secndary  carding ps-3 m-0 py-2">
                <h2 >{heading}</h2>
                <p>
                 {para}
                </p>
              </div>
              <div className="container col-lg-2  bg-warig  card2-img">
                <img src={img} alt="" className='ms-auto d-block m-0 '/>
              </div>
            </div>
          </div>
        </div>
        <div className="container bg-ifo p-3 border cardi mt-2">
          <a href="/" className='ms-4'>{link}</a>
        </div>
    </div>
  )
}

export default Card2
