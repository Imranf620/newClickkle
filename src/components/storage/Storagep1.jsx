import React, { useState } from "react";
import "./Storagep1.css";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Image from "../images/cloud.png";
import abc from "../images/storage bar.png";

import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Storagep1 = () => {
  const [price, setPrice] = useState("CA $2.79/Monthly");
  const [month, setMonth] = useState("Billed Monthly");
  const [pp, setPp] = useState("CA $3.99/Monthly");
  const [year, setYear] = useState("CA $13.99/Monthly");

  const [percent, setPercent] = useState(false);

  const changeState = () => {
    setPrice("CA $27.99/year");
    setMonth("Billed anually");
    setPp("CA $39.99/year");
    setYear("CA $139.99/year");

    setPercent(true);
  };

  const changeText = () => {
    setPrice("CA $2.79/Monthly");
    setMonth("Billed Monthly");
    setPp("CA $3.99/Monthly");
    setYear("CA $13.99/Monthly");
    setPercent(false);
  };
  return (
    <>
      <div className="str1">
        <nav>
          <h2>Storage</h2>
          <FontAwesomeIcon className="infoI" icon={faInfoCircle} />
        </nav>
        <div className="storage">
          <CloudOutlinedIcon alt="" className="cloudI" />
          <h2>You've got 100GB of Storage</h2>
          <h3>Storage in clikkle E-sign, files and Clikkle camphaigns</h3>
          <button className="buton">
            {" "}
            <h5>Get more storage</h5>
          </button>
        </div>
        <div className="usedS">
          <div className="total">
            <i>43.75GB used of 100GB</i>
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
          <div className="bar">
            <img src={abc} alt="" className="barImg" />
          </div>
        </div>

        <div className="Sdetails">
          <div>
            <h5>STORAGE DETAILS</h5>
          </div>
          <div className="singleUsed">
            <div className="usedLink">
              <FontAwesomeIcon className="violet" icon={faCircle} />
              <p>swiprr</p>
            </div>
            <div className="usedLink">
              <p>31.07 GB</p>
              <FontAwesomeIcon
                className="link"
                icon={faArrowUpRightFromSquare}
              />
            </div>
          </div>
          <div className="singleUsed">
            <div className="usedLink">
              <FontAwesomeIcon className="green" icon={faCircle} />
              <p>Hivrr</p>
            </div>
            <div className="usedLink">
              <p>4.97 GB</p>
              <FontAwesomeIcon
                className="link"
                icon={faArrowUpRightFromSquare}
              />
            </div>
          </div>
          <div className="singleUsed">
            <div className="usedLink">
              <FontAwesomeIcon className="red" icon={faCircle} />
              <p>clikkle ads</p>
            </div>
            <div className="usedLink">
              <p>16.74 GB</p>
              <FontAwesomeIcon
                className="link"
                icon={faArrowUpRightFromSquare}
              />
            </div>
          </div>
          <div className="singleUsed">
            <div className="usedLink">
              <FontAwesomeIcon className="blue" icon={faCircle} />
              <p>clikkle SMS</p>
            </div>
            <div className="usedLink">
              <p>2.73 GB</p>
              <FontAwesomeIcon
                className="link"
                icon={faArrowUpRightFromSquare}
              />
            </div>
          </div>
          <div className="singleUsed">
            <div className="usedLink">
              <FontAwesomeIcon className="yellow" icon={faCircle} />
              <p>KeptUp</p>
            </div>
            <div className="usedLink">
              <p>1.22 GB</p>
              <FontAwesomeIcon
                className="link"
                icon={faArrowUpRightFromSquare}
              />
            </div>
          </div>
          <div className="singleUsed">
            <div className="usedLink">
              <FontAwesomeIcon className="brown" icon={faCircle} />
              <p>Device Backup</p>
            </div>
            <div className="usedLink">
              <p>0.10 GB</p>
              <FontAwesomeIcon
                className="link"
                icon={faArrowUpRightFromSquare}
              />
            </div>
          </div>
        </div>
        <div className="mobSec">
          <div className="tt">
            <h6>YOUR DEVICE BACKUP(1)</h6>
          </div>
          <div className="uu">
            <div className="ss">
              <div>
                <FontAwesomeIcon className="vv" icon={faMobileScreen} />
              </div>
              <div>
                <h5> Galaxy A14</h5>
                <p className="ww"> Backup incomplete</p>
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
        </div>
      </div>
      <div className="str2">

        <div className="container">
          <div className="paragraph">
            <h3>Get Your Space Back</h3>
            <br />
            <p>See ways to free up space in clikkle , file E-sign and Ads.</p>
            <br />
            <p className="blue">Free up account storage.</p>
          </div>
          <img className="image" src={Image} alt="Example Image" />
        </div>

        <div className="heading">
          <h4>Ways to use your Clikkle Acount storge.</h4>
          <p>Backup your phones , upload photes and more</p>
        </div>

        <div>
          <div className="data">
            <p
              className="
        i"
            >
              <FontAwesomeIcon className="backupIcon" icon={faCloudArrowUp} />
              Backup Your Device
            </p>
            <p className="backupIcon">
              <i class="fa-solid fa-caret-down"></i>
            </p>
          </div>

          <div className="data">
            <p
              className="
   i"
            >
              <FontAwesomeIcon className="backupIcon" icon={faCloudArrowUp} />
              Import Photes from Swiprr to Clikkle Files{" "}
            </p>
            <p className="h">
              <i class="fa-solid fa-caret-down"></i>
            </p>
          </div>
          <div className="data">
            <p
              className="
   i"
            >
              <FontAwesomeIcon className="backupIcon" icon={faCloudArrowUp} />
              Import Photes from icloud to Clikkle Files
            </p>
            <p className="h">
              <i class="fa-solid fa-caret-down"></i>
            </p>
          </div>
        </div>
      </div>

      <div className="Str3">
        <div className="top-content">
          <h4>Upgrade for more Storage</h4>
          <p>More Space , Extra Benefits</p>
          <p>
            Cancel anytime. By subscribing You agree to{" "}
            <button className="clickBtn" onclick="alert('Button clicked!')">
              Clikkle Plus
            </button>{" "}
            terms and Conditions.
          </p>
        </div>

      </div>

      <div className="Str4">
        <div className="lBtn">
          <button className="btn border mx-1" onClick={changeText}>
            Monthly
            <br />
          </button>
          <button className="btn border mx-1" onClick={changeState}>
            Annual
            <b className="off">
              {" "}
              save <b className="save">30% </b>{" "}
            </b>
          </button>
        </div>
        <img src="logo 192.png" alt="" />
        <div className="cardsSection">
          <div className="cards">
            <div className="singleCard">
              <div className="cardCont">
                <p>current plan</p>
                <b>basic</b>
                <h5>100 GB</h5>
                <h6>{price}</h6>
                <b className="e">
                  {month} {percent && <span className="save"> Save 30%</span>}
                </b>
                <br />
                <button className="mt-1 mb-2 btn border">Current plan</button>
              </div>

              <hr />
              <div className="features">
                <p>
                  {" "}
                  <FontAwesomeIcon className="tick" icon={faCheck} />
                  &nbsp; &nbsp; 100 GB storage for files E-sign and C-mail
                </p>
                <p>
                  {" "}
                  <FontAwesomeIcon className="tick" icon={faCheck} />
                  &nbsp; &nbsp; Share up to five others
                </p>
              </div>
            </div>
            <br />
            <div className="singleCard">
              <div className="cardCont">
                <p>Recommended</p>
                <b>Standard</b>
                <h5>200 GB</h5>
                <h6>C{pp}</h6>
                <b className="e">
                  {month} {percent && <span className="save"> Save 30%</span>}
                </b>
                <br />
                <button className="mt-1 mb-2 btn border">Upgrade</button>
              </div>
              <hr />
              <div className="features">
                <p>
                  {" "}
                  <FontAwesomeIcon className="tick" icon={faCheck} />
                  &nbsp; &nbsp; 200 GB for storage of files E-sign and C-mail
                </p>
                <p>
                  {" "}
                  <FontAwesomeIcon className="tick" icon={faCheck} />
                  &nbsp; &nbsp; Share up to five others
                </p>
                <p>
                  {" "}
                  <FontAwesomeIcon className="tick" icon={faCheck} />
                  &nbsp; &nbsp; 3% back in the clikkle store
                </p>
              </div>
            </div>
            <br />
            <div className="singleCard">
              <div className="cardCont">
                <b>Premiumc</b>
                <h5>100GB</h5>
                <h6>{year}</h6>
                <b className="e">
                  {month} {percent && <span className="save"> Save 30%</span>}
                </b>
                <br />
                <button className="mt-5 mb-1 btn border">Upgrade</button>
              </div>

              <hr />
              <div className="features">
                <p>
                  {" "}
                  <FontAwesomeIcon className="tick" icon={faCheck} />
                  &nbsp; &nbsp; 2 TB storage for files E-sign and C-mail
                </p>
                <p>
                  {" "}
                  <FontAwesomeIcon className="tick" icon={faCheck} />
                  &nbsp; &nbsp; Share up to five others
                </p>
                <p>
                  {" "}
                  <FontAwesomeIcon className="tick" icon={faCheck} />
                  &nbsp; &nbsp; 10% back in the clikkle store
                </p>
                <p>
                  {" "}
                  <FontAwesomeIcon className="tick" icon={faCheck} />
                  &nbsp; &nbsp; Clikkle plus premium lectures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Storagep1;
