

import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import paint from "./images/paint.png"
import security from "./images/Assets/security.png"
import Group from "./images/Assets/Group 34.png"
import dicons from "./images/Assets/3dicons.png"

function App() {
  return (
    <>
      <div className="container-fluid mt-2 col-11 mx-auto">
        <div className="row justify-content-between ">
          <h4 className="col-9">Home</h4>
          <i className="ri-question-line col-1 text-end"></i>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZKRT3wwgtQg-RMlJo80S49iMqTSXx78OnRcMdEt-Ug&s"
          alt="hh"
          className="d-block mx-auto proImg"
          style={{ height: "80px", marginTop: "50px" }}
        />
        <h3 className="text-center">Welcome, Matthew Adebayo</h3>
        <p className="text-center">
          Manage your info,privacy and security to make clikkle work better for
          you,{" "}
          <a href="/" className="link">
            Learn more <i className="ri-question-line col-1 text-end"></i>
          </a>
        </p>
      </div>
      <div className="col-11 mx-auto p-2">
        <div className="row m-0 justify-content-between mt-5" style={{Height:'46vh'}}>
          <div className="col-lg-6">
            <div className="border rounded-3 p-0 pb-3 ">
              <div className="row p-3 pb-0">
                <div className="col-8">
                  <h3 className="col-9">
                    Privacy & Personalization
                  </h3>
                  <p className="mt-4">
                    See the data in your Clikkle Account and choose what
                    activity is saved to personalize your Clikkle experience.
                  </p>
                </div>
                <div className="col-4">
                  <img
                    src={paint}
                    alt=""
                    className="d-block mx-auto"
                    style={{ height: "120px", width:"120px", marginTop: "50px" }}
                  />
                </div>
              </div>
              <hr />
              <a href="/" className="ms-3 link">
                Manage your data & privacy
              </a>
            </div>
          </div>

          <div className="col-lg-6 ">
            <div className="border rounded-3 p-0 pb-3 h-100">
              <div className="row p-3 pb-0" style={{height:'83%'}}>
                <div className="col-8">
                  <h3 className="mt-3">You have security tips</h3>
                  <p className="col-9 mt-4">
                    Security tips are found in the security checkup.
                  </p>
                </div>
                <div className="col-4">
                  <img
                    src={security}
                    alt=""
                    className="d-block mx-auto"
                    style={{ height: "130px", width:"130px", paddingRight:"20px", marginTop: "50px" }}
                  />
                </div>
              </div>
              <hr />
              <a href="/" className="ms-3 link">
                Review security tips
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="col-11 mx-auto">
          <div className="border p-3">
            <div className="row py-5 pt-3">
              <div className="col-7">
                <h4>Privacy suggestions available</h4>
                <p>
                  Take the privacy checkup and select he setting that are just
                  right for you.
                </p>
              </div>
              <div className="col-5">
                <img
                  src={Group}
                  alt=""
                  className="d-block mx-auto"
                  style={{ height: "100px", width:"100px", marginTop: "20px" }}
                />
              </div>
            </div>
            <a href="/" className="link">Review suggestions (4)</a>
          </div>
        </div>
      </div>
      ;
      <div className="container-fluid col-11 mx-auto">
        <div className="border p-2 pt-4">
          <h3>Looking for something else?</h3>
          <a href="/" className="row border-bottom mt-3 link">
            <p className="col-11 ps-4">
              <i class="ri-search-line pe-3"></i>
              Search Clickkle Account
            </p>
            <i class="ri-arrow-drop-right-line text-end fs-2 col-1"></i>
          </a>
          <a href="/" className="row border-bottom mt-3 link">
            <p className="col-11 ps-4">
              <i class="ri-question-line pe-3"></i>
              Search Clickkle Account
            </p>
            <i class="ri-arrow-drop-right-line text-end fs-2 col-1"></i>
          </a>

          <a href="/" className="row  mt-3 link">
            <p className="col-11 ps-4">
              <i class="ri-feedback-line pe-3"></i>
              Search Clickkle Account
            </p>
            <i class="ri-arrow-drop-right-line text-end fs-2 col-1"></i>
          </a>
        </div>

        <div className="row p-4">
          <p className="col-8">
            Only you can see your settings. You minght also want your review
            your setting for E-sign, Compain or whichever Clickkle services you
            use most. Clickkle keep your data private, safe and secure.{" "}
            <a href="/" className="link">
              Learn more <i class="ri-question-line"></i>
            </a>
          </p>
          <img
           src={dicons} 
          alt="" className="col-1" style={{ height: "100px", width:"100px" }} />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
