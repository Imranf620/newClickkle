import React from 'react'
// import logo from '../logo.svg'
import avatars from "./images/Assets/avatars.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default function Personal1() {
    return (
        <div>
            <div className="container">
                <div className='d-flex justify-content-between align-items-baseline'>
                    <h1>Personal Info</h1>
                    <i className="fa-solid fa-circle-info"></i>
                </div>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <h1>Personal Info</h1>
                    <p>Info about you and your preference across Clikkle services.</p>
                </div>

                <div className='d-flex justify-content-between '>
                    <div>
                        <h3>Your profile info in Clikkle services</h3>
                        <p>Personal info and options to manage it.You can make some of this info, <br />
                            like your contact details,visible to other so they can reach you easily. <br />
                            You can also see a summary of your project.
                        </p>
                    </div>

                    <div className='main'>
                        <div className='position-relative '>
                            <img src={avatars} width={150} height={150} alt="missing" />
                        </div>
                        
                    </div>
                </div>

                <div className='border border-1 border-secondary rounded py-3 px-1'>
                    <div className='mt-2'>
                        <h3>Basic Info</h3>
                        <p>Some info may be visible to other people using Clickkle services. <span className='text-primary'>Learn more <i className="fa-solid fa-circle-question"></i></span></p>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <span>Profile Picture</span>
                        <span>Add a profile picture to personalize the your account</span>
                        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZKRT3wwgtQg-RMlJo80S49iMqTSXx78OnRcMdEt-Ug&s" className='proImg' alt="missing" />
                    </div>
                    <hr className='bg-secondary' />

                    <div className='d-flex justify-content-between align-items-baseline'>
                        <span>Name</span>
                        <span>Matthew Adebayo</span>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                    <hr className='bg-secondary' />

                    <div className='d-flex justify-content-between align-items-baseline'>
                        <span>Birthday</span>
                        <span>June 30,1995</span>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                    <hr className='bg-secondary' />

                    <div className='d-flex justify-content-between align-items-baseline'>
                        <span>Gender</span>
                        <span>Male</span>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </div>




            {/* Contact Info */}


            <div className="container mt-4">
                <div className='d-flex justify-content-between align-items-baseline'>
                    <h1>Personal Info</h1>
                    <i className="fa-solid fa-circle-info"></i>
                </div>
                <div className="container border border-1 border-secondary rounded">
                    <div>
                        <h3>Contact Info</h3>
                    </div>

                    <div className='d-flex justify-content-between align-items-center'>
                        <span>Email</span>
                        <span>Matthewadebayo@clikklemail.com <br />adebayomatthew36@yahoo.com</span>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                    <hr className='bg-secondary' />

                    <div className='d-flex justify-content-between align-items-baseline'>
                        <span>Phone Number</span>
                        <span>+234 904 945 3391</span>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                    <hr className='bg-secondary' />

                    <div className='mb-2'>
                        <span>More Option</span>
                    </div>

                    <div className='col-4 d-flex justify-content-center align-items-center  border border-1 border-secondary mb-2 p-2'>
                        <span className='text-primary'><FontAwesomeIcon icon={faEnvelope} style={{marginRight:"15px"}} /></span>
                        <span className='ml-2'>Manage emails from Clickkle</span>
                    </div>

                </div>


            </div>



            {/* Address Info */}


            <div className="container mt-4">
                <div className='d-flex justify-content-between align-items-baseline'>
                    <h1>Personal Info</h1>
                    <i className="fa-solid fa-circle-info"></i>
                </div>
                <div className="container border border-1 border-secondary rounded">
                    <div className='mt-3'>
                        <h3>Addresses</h3>
                        <p>Your residential and workplace location are utilized to tailor your interaction across Clickkle services and to provide you with more pertinent advertisements.</p>
                        <p>Additionaly,you have the option to include adresseses in Clikkle profile,with the ability to contol wether other can view them.<span className='text-primary'>Learn more <i className="fa-solid fa-circle-question"></i></span> </p>
                    </div>

                    <div className='d-flex justify-content-between align-items-center'>
                        <span>Home</span>
                        <span>Note set</span>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                    <hr className='bg-secondary' />

                    <div className='d-flex justify-content-between align-items-baseline'>
                        <span>Work</span>
                        <span>Not set</span>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                    <hr className='bg-secondary' />
                    <div className='d-flex justify-content-between align-items-baseline mb-2'>
                        <span>Other Addresses</span>
                        <span style={{ marginRight: "7%" }}>None</span>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>




                </div>


            </div>


            {/* Your profiles */}

            <div className="container mt-4">
                <div className='d-flex justify-content-between align-items-baseline'>
                    <h1>Personal Info</h1>
                    <i className="fa-solid fa-circle-info"></i>
                </div>

                <div className="row m-0 col-11 mx-auto p-0 mt-5">
                <div className="col-11 mx-auto col-lg-6">
                    <div className="card  p-4">
                        <div style={{ minHeight: "35vh" }}>
                            <h3 className='mt-4'>Your profile</h3>
                            <p className='mt-3 col-8 p-0'>Observe the appearance of your
                                various profiles across Clikkle services</p>
                        </div>
                        <div>
                            <hr />
                            <a href="/" className='link'>See profile</a>
                        </div>
                    </div>
                </div>
                <div className="col-11 mx-auto col-lg-6">
                    <div className="card  p-4" >
                        <div className=" row" style={{ minHeight: "35vh" }}>
                            <div className="col-8">
                                <h3 className='mt-4'>Your profile</h3>
                                <p className='mt-3'>Choose which personal details you
                                    want to share with others while using
                                    your primary Clikkle Account profile
                                    across all Clikkle services.</p>
                            </div>
                            <div className="col-4 mt-5">
                                <img
                                //  src={logo}

                                 alt="" style={{ height: '100px' }} />
                            </div>

                        </div>
                        <hr />
                        <a href="/" className='link'>See profile</a>
                    </div>
                </div>
            </div>
            <div className="col-11 mx-auto mt-5">
                <div className="row">
                    <div className="col-6">
                        <h3>Additional details and preferences for Clickkle Services</h3>
                        <p className='mt-4 col-9 p-0'>Methods for confirming your identity and preferences for
                            web settings</p>
                    </div>
                    <div className="col-5">
                        <img 
                        // src={logo}
                         alt="" style={{ height: '100px' }} className='mx-auto d-block' />
                    </div>
                </div>
            </div>

                
            </div>


            {/* Password */}


            <div className="container mt-5">
                <div className="row bg-dange gap-2 px-5">
                    <div className="container col  bg-wrning rounded-4 border border-2">
                        <h3 className="mt-3 mb-3">Password</h3>
                        <p>A secure password help protect your Clikkle Account</p>
                        <div className="d-flex justify-content-between hel align-items-center">
                            <div>
                                <span>*****</span>
                                <p>Last changed March 15th, 2024</p>
                            </div>
                            <span><i class="fa-solid fa-angle-right"></i></span>
                        </div>
                    </div>
                    <div className="container col p-3 bg-ino rounded-4 border border-2">
                        <h3 className="mt-3 mb-3">General Preference for the web</h3>
                        <p>Manage setting for Clikkle services form the web.</p>
                        <div className="d-flex justify-content-between hel align-items-center border-bottom border-2 mt-5">
                            <div>
                                <span className="d-flex align-items-center">
                                    <span><i class="fa-solid fa-globe"></i>   <b>Language</b> </span>
                                </span>
                                <p>English (United States)</p>
                            </div>
                            <span><i class="fa-solid fa-angle-right"></i></span>
                        </div>
                        <div className="d-flex justify-content-between  align-items-center border-bottom border-2 mt-3">
                            <div>
                                <span className="d-flex align-items-center">
                                    <span><i class="fa-solid fa-keyboard"></i><b> Input Tools</b></span>
                                </span>
                                <p>Type more easily in your language</p>
                            </div>
                            <span><i class="fa-solid fa-angle-right"></i></span>
                        </div>
                        <div className="d-flex justify-content-between hel align-items-center mt-3">
                            <div>
                                <span className="d-flex align-items-center">
                                    <span><i class="fa-solid fa-person"></i> <b> Accessibility</b></span>
                                </span>
                                <p>High-contrast color OFF (United States)</p>
                            </div>
                            <span><i class="fa-solid fa-angle-right"></i></span>
                        </div>
                    </div>
                </div>
            </div>



        {/* something else */}
        <div className="container-fluid col-11 mx-auto mt-5">
        <div className="card p-2 pt-4">
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
            <a href="/" className='link'>
              Learn more <i class="ri-question-line"></i>
            </a>
          </p>
          <img 
        //   src={logo}
           alt="" className="col-1" style={{ height: "50px" }} />
        </div>
      </div>

        </div>
    )
}
