import React from 'react'
import { Carousel } from 'react-bootstrap'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faGithub,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "./Landingpagecss.css"
const flipCardWrapAll = document.querySelector("#flip-card-wrap-all")
const cardsWrapper = document.querySelectorAll(".flip-card-3D-wrapper")
const cards = document.querySelectorAll(".flip-card")
let frontButtons = ""
let backButtons = ""

for (let i = 0; i < cardsWrapper.length; i++) {
    frontButtons = cardsWrapper[i].querySelector(".flip-card-btn-turn-to-back")
    frontButtons.style.visibility = "visible"
    frontButtons.onclick = function () {
        cards[i].classNameList.toggle('do-flip')
    }

    backButtons = cardsWrapper[i].querySelector(".flip-card-btn-turn-to-front")
    backButtons.style.visibility = "visible"
    backButtons.onclick = function () {
        cards[i].classNameList.toggle('do-flip')
    }
}
export default function Landingpage() {

    return (
        <>
            <Carousel fade controls={false} indicators={false} interval={2000} className="ca1">
                <Carousel.Item>
                    <Carousel.Caption>
                        <motion.h3 className="text" animate={{ opacity: 1, scale: 1.3 }}
                            transition={{ duration: 2 }}>Your Journey, Our Track</motion.h3>
                        <br></br>
                        <center>
                            <span className="Tag1">
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString("“Navigate Himachal's Beauty with Confidence....”")
                                            .pauseFor(1)
                                            .start();
                                    }}
                                />
                            </span>
                        </center>
                    </Carousel.Caption>
                    <img
                        className="d-block w-100 img1"
                        src="https://lp-cms-production.imgix.net/2019-06/GettyImages-149353949_high.jpg"
                        alt="Your Journey, Our Track"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  img1"
                        src="https://blog.redbus.in/wp-content/uploads/2021/03/shutterstock_1340996027-850x568.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <motion.h3 className="text" animate={{ opacity: 1, scale: 1.3 }}
                            transition={{ duration: 2 }}>Your Journey, Our Track</motion.h3>
                        <br></br>
                        <center>
                            <span className="Tag1">
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString("“Navigate Himachal's Beauty with Confidence....”")
                                            .pauseFor(1)
                                            .start();
                                    }}
                                />
                            </span>
                        </center>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  img1"
                        src="https://static2.tripoto.com/media/filter/tst/img/223647/TripDocument/1503678762_img_20170813_111503.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <motion.h3 className="text" animate={{ opacity: 1, scale: 1.3 }}
                            transition={{ duration: 2 }}>Your Journey, Our Track</motion.h3>
                        <br></br>
                        <center>
                            <span className="Tag1">
                                <Typewriter

                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString("“Navigate Himachal's Beauty with Confidence....”")
                                            .pauseFor(1)
                                            .start();
                                    }}
                                />
                            </span>
                        </center>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container-fluid con2">
                <br></br><br></br>
                <div className='container'>
                    <motion.div className="row rd1" whileHover={{ scale: '1.06' }}>
                        <p className=" ct">Revolutionize Himachal's transit with real time tracking, eco-info, safety reporting, and user feedback, bridging users and drivers for transparent travel.  Our innovative web platform in Himachal Pradesh unites vehicle authorities and users, providing real-time tracking, safety reporting, and eco-conscious travel details, elevating the region's transportation experience to new heights</p>
                    </motion.div>
                    <br></br>
                    <div className="row rd2">
                        <div className="row">
                            <div className="col-sm-4">
                                <p className="ct">Want to be a part of our journey?</p>
                            </div>
                            <div className="col-sm-8">

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">

                            </div>
                            <div className="col-sm-2">
                                <Link to="/Login1"><button type="button" className="btn btn-outline-success lo1" style={{ width: '100%' }}>Login</button></Link>
                            </div>
                            <div className="col-sm-7">

                            </div>
                        </div>
                    </div>

                    <br></br><br></br>
                    <div className='row'>
                        <motion.div className="flip-card-3D-wrapper col-md-4 car1" whileHover={{ scale: 1.08 }}>
                            <div className="flip-card">
                                <div className="flip-card-front">
                                    <center> <div className='card-img'><img src="/routeimgfinal.png" /></div></center><br></br><br></br>
                                    <div className='card-body'>
                                        <h3 className="text-center" style={{ color: 'white' }}>Real-Time Location</h3> <h3 className="text-center" style={{ color: 'rgb(214, 77, 139)' }}>Tracking</h3>
                                        <p className="cb">A quick description of the front item</p>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className='card-body'>
                                        <p className="p1 cb">Users can effortlessly track the real-time location of buses, making trip planning a breeze and minimizing unnecessary waiting time.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="flip-card-3D-wrapper col-md-4" whileHover={{ scale: 1.08 }}>
                            <div className="flip-card">
                                <div className="flip-card-front">
                                    <center> <img src="/transpic.png" /></center>
                                    <br></br><br></br>
                                    <div className='card-body'>
                                        <h3 className="text-center">Contribution to</h3><h3 className="text-center" style={{ color: 'rgb(214, 77, 139)' }}>Transparency</h3>
                                        <p className="cb">A quick description of the front item</p>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className='card-body'>
                                        <p className="p1 cb">By offering vital data and real-time updates, drivers actively contribute to creating a transparent and accountable public transportation system.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="flip-card-3D-wrapper col-md-4" whileHover={{ scale: 1.08 }}>
                            <div className="flip-card">
                                <div className="flip-card-front">
                                    <center> <img src="profileicon.png" /></center>
                                    <br></br><br></br>
                                    <div className='card-body'>
                                        <h3 className="text-center">Comprehensive</h3><h3 className="text-center" style={{ color: 'rgb(214, 77, 139)' }}>Profile</h3>
                                        <p className="cb">A quick description of the front item</p>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className='card-body'>
                                        <p className="p1 cb">Our app empowers drivers to create detailed profiles, showcasing essential information such as vehicle type, emissions compliance, and contact details. This not only fosters trust but also promotes transparency within the transportation network.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <br></br><br></br><br></br>
            </div>
            <div className="container-fluid" style={{ background: 'black' }}>
                <hr className="hr-or" />
                <hr className="hr-or" />
                <hr className="hr-or" />
                <footer className="nb-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="about">
                                    <img src="images/logo.png" className="img-responsive center-block" alt="" />

                                    <div className="row">
                                        <div className="social-media">
                                            <center>
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <div class="social-container">
                                                            <a href="https://www.youtube.com/c/jamesqquick"
                                                                className="youtube social">
                                                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div class="social-container">
                                                            <a href="https://www.youtube.com/c/jamesqquick"
                                                                className="youtube social">
                                                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div class="social-container">
                                                            <a href="https://www.youtube.com/c/jamesqquick"
                                                                className="youtube social">
                                                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div class="social-container">
                                                            <a href="https://github.com/harsh0853/SEVN.git"
                                                                className="gitHub social">
                                                                <FontAwesomeIcon icon={faGithub} size="2x" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br></br><br></br>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-info-single">
                                    <h2 className="title">Help Center</h2>
                                    <ul className="list-unstyled">
                                        <li><i className="fa fa-angle-double-right"></i> How to Use</li>
                                        <li><i className="fa fa-angle-double-right"></i> FAQ's</li>
                                        <li><i className="fa fa-angle-double-right"></i>APi info</li>
                                        <li><i className="fa fa-angle-double-right"></i>Customer Service</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <div className="footer-info-single">
                                    <h2 className="title">Developers</h2>
                                    <ul className="list-unstyled">
                                        <li><i className="fa fa-angle-double-right"></i>LPPR</li>
                                        <li><i className="fa fa-angle-double-right"></i>Somanath</li>
                                        <li><i className="fa fa-angle-double-right"></i>Abhisek</li>
                                        <li><i className="fa fa-angle-double-right"></i>Bishmay</li>
                                        <li><i className="fa fa-angle-double-right"></i>Harsh</li>
                                        <li><i className="fa fa-angle-double-right"></i>Priyanka</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <div className="footer-info-single">
                                    <h2 className="title">Security & privacy</h2>
                                    <ul className="list-unstyled">
                                        <li><i className="fa fa-angle-double-right"></i> Terms Of Use</li>
                                        <li><i className="fa fa-angle-double-right"></i> Privacy Policy</li>
                                        <li><i className="fa fa-angle-double-right"></i> Return / Refund Policy</li>
                                        <li><i className="fa fa-angle-double-right"></i> Store Locations</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <div className="footer-info-single">
                                    <h2 className="title">Payment</h2>
                                    <p>Totally Free of Cost..</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4">

                                </div>
                                <div className="col-sm-4">
                                    <p>      Copyright © 2023. SEVN ♥️. All rights reserved</p>
                                </div>
                                <div className="col-sm-4">

                                </div>
                            </div>
                        </div>
                    </section>
                </footer>
            </div>
            {/* font-family: 'Roboto Mono', monospace; */}
        </>
    )
}
